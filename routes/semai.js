var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { Semai, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const semai = await Semai.findAll({
        raw: true
    });

    return res.json(semai);
})


router.get('/statistics', async (req, res) => {
    const LUAS_SEMAI = 0.0004;
    const PLOT = await Semai.max('plot');

    const semai = await Semai.findAll({
        attributes: [
            "nama_spesies",
            [sequelize.fn('count', sequelize.col('nama_spesies')), 'jumlah']
        ],
        group: 'nama_spesies',
        raw: true
    })

    var frekuensi_total = 0;
    var kerapatan_total = 0;

    for (i = 0; i < semai.length; i++) {
        semai[i]['frekuensi'] = semai[i]['jumlah'] / PLOT;
        semai[i]['kerapatan'] = semai[i]['jumlah'] / (LUAS_SEMAI * PLOT);
        frekuensi_total += semai[i]['frekuensi'];
        kerapatan_total += semai[i]['kerapatan'];
    }

    for (i = 0; i < semai.length; i++) {
        semai[i]['inp'] = (semai[i]['kerapatan']/kerapatan_total + semai[i]['frekuensi']/frekuensi_total) * 100;
    }

    return res.json(semai);
})

router.post('/', async (req, res) => {
    const schema = {
        nama_spesies: "string",
        jumlah_ind: {
            type: "number",
            integer: true,
            optional: false
        },
        plot: {
            type: "number",
            integer: true,
            optional: false
        },
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }

    const semai = await Semai.create(req.body);

    return res.json(semai);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let semai = await Semai.findByPk(id, {
        plain: true
    });

    if (!semai) {
        return res.status(404).json({ message: "Semai tidak ditemukan"})
    }

    const schema = {
        nama_spesies: "string|optional",
        keliling: {
            type: "number",
            integer: true,
            optional: true
        },
        plot: {
            type: "number",
            integer: true,
            optional: true
        },
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }

    semai = await semai.update(req.body);

    return res.json(semai);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const semai = await Semai.findByPk(id);

    if (!semai) {
        return res.status(404).json({ message: "Semai tidak ditemukan"})
    }

    await semai.destroy();

    res.json({ message: "Berhasil menghapus semai"})
})

module.exports = router
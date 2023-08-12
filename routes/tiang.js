var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { Tiang, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const tiang = await Tiang.findAll();

    return res.json(tiang);
})


router.get('/statistics', async (req, res) => {
    const LUAS_TIANG = 0.01;
    const PLOT = await Tiang.max('plot');

    const tiang = await Tiang.findAll({ 
        attributes: [
            'nama_spesies', 
            [sequelize.fn('sum', sequelize.col('luas')), 'luas']
        ],
        group: 'nama_spesies',
        raw: true
    });

    const jumlah_tiang = await Tiang.findAll({
        attributes: [
            [sequelize.fn('count', sequelize.col('nama_spesies')), 'jumlah']
        ],
        group: 'nama_spesies',
        raw: true
    })

    var kerimbunan_total = 0;
    var frekuensi_total = 0;
    var kerapatan_total = 0;

    for (i = 0; i < tiang.length; i++) {
        tiang[i]['jumlah'] = jumlah_tiang[i]['jumlah'];
        tiang[i]['frekuensi'] = jumlah_tiang[i]['jumlah'] / PLOT;
        tiang[i]['kerapatan'] = jumlah_tiang[i]['jumlah'] / (LUAS_TIANG * PLOT);
        kerimbunan_total += tiang[i]['luas'];
        frekuensi_total += tiang[i]['frekuensi'];
        kerapatan_total += tiang[i]['kerapatan'];
    }

    for (i = 0; i < tiang.length; i++) {
        tiang[i]['inp'] = (tiang[i]['kerapatan']/kerapatan_total + tiang[i]['frekuensi']/frekuensi_total + tiang[i]['luas']/kerimbunan_total) * 100;
    }

    return res.json(tiang);
})

router.post('/', async (req, res) => {
    const schema = {
        nama_spesies: "string",
        keliling: {
            type: "number",
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

    const tiang = await Tiang.create(req.body);

    return res.json(tiang);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let tiang = await Tiang.findByPk(id);

    if (!tiang) {
        return res.status(404).json({ message: "Tiang tidak ditemukan"})
    }

    const schema = {
        nama_spesies: "string|optional",
        keliling: "number|optional",
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

    tiang = await tiang.update(req.body);

    return res.json(tiang);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const tiang = await Tiang.findByPk(id);

    if (!tiang) {
        return res.status(404).json({ message: "Tiang tidak ditemukan"})
    }

    await tiang.destroy();

    res.json({ message: "Berhasil menghapus tiang"})
})

module.exports = router
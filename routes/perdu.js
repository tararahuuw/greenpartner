var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { Perdu, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const perdu = await Perdu.findAll({
        raw: true
    });

    for (i = 0; i < perdu.length; i++) {
        perdu[i]['kerimbunan'] = Number(perdu[i]['kerimbunan']);
    }

    return res.json(perdu);
})


router.get('/statistics', async (req, res) => {
    const LUAS_PERDU = 0.0025;
    const PLOT = await Perdu.max('plot');

    const perdu = await Perdu.findAll({ 
        attributes: [
            'nama_spesies', 
            [sequelize.fn('sum', sequelize.col('kerimbunan')), 'kerimbunan']
        ],
        group: 'nama_spesies',
        raw: true
    });

    const jumlah_perdu = await Perdu.findAll({
        attributes: [
            [sequelize.fn('count', sequelize.col('nama_spesies')), 'jumlah']
        ],
        group: 'nama_spesies',
        raw: true
    })

    var kerimbunan_total = 0;
    var frekuensi_total = 0;
    var kerapatan_total = 0;

    for (i = 0; i < perdu.length; i++) {
        perdu[i]['jumlah'] = jumlah_perdu[i]['jumlah'];
        perdu[i]['frekuensi'] = jumlah_perdu[i]['jumlah'] / PLOT;
        perdu[i]['kerapatan'] = jumlah_perdu[i]['jumlah'] / (LUAS_PERDU * PLOT);
        kerimbunan_total += Number(perdu[i]['kerimbunan']);
        frekuensi_total += perdu[i]['frekuensi'];
        kerapatan_total += perdu[i]['kerapatan'];
    }
    console.log(perdu);

    for (i = 0; i < perdu.length; i++) {
        perdu[i]['inp'] = (perdu[i]['kerapatan']/kerapatan_total + perdu[i]['frekuensi']/frekuensi_total + Number(perdu[i]['kerimbunan'])/kerimbunan_total) * 100;
    }

    return res.json(perdu);
})

router.post('/', async (req, res) => {
    const schema = {
        nama_spesies: "string",
        kerimbunan: {
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

    const perdu = await Perdu.create(req.body);

    return res.json(perdu);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let perdu = await Perdu.findByPk(id, {
        plain: true
    });

    if (!perdu) {
        return res.status(404).json({ message: "Perdu tidak ditemukan"})
    }

    perdu['kerimbunan'] = Number(perdu['kerimbunan']);

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

    perdu = await perdu.update(req.body);

    return res.json(perdu);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const perdu = await Perdu.findByPk(id);

    if (!perdu) {
        return res.status(404).json({ message: "Perdu tidak ditemukan"})
    }

    await perdu.destroy();

    res.json({ message: "Berhasil menghapus perdu"})
})

module.exports = router
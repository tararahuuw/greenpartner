var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { Pancang, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const pancang = await Pancang.findAll({
        raw: true
    });

    for (i = 0; i < pancang.length; i++) {
        pancang[i]['keliling'] = Number(pancang[i]['keliling']);
    }

    return res.json(pancang);
})

router.get('/statistics', async (req, res) => {
    const LUAS_PANCANG = 0.0025;
    const PLOT = await Pancang.max('plot');

    const pancang = await Pancang.findAll({ 
        attributes: [
            'nama_spesies', 
            [sequelize.fn('sum', sequelize.col('luas')), 'luas']
        ],
        group: 'nama_spesies',
        raw: true
    });

    const jumlah_pancang = await Pancang.findAll({
        attributes: [
            [sequelize.fn('count', sequelize.col('nama_spesies')), 'jumlah']
        ],
        group: 'nama_spesies',
        raw: true
    })

    var kerimbunan_total = 0;
    var frekuensi_total = 0;
    var kerapatan_total = 0;

    for (i = 0; i < pancang.length; i++) {
        pancang[i]['jumlah'] = jumlah_pancang[i]['jumlah'];
        pancang[i]['frekuensi'] = jumlah_pancang[i]['jumlah'] / PLOT;
        pancang[i]['kerapatan'] = jumlah_pancang[i]['jumlah'] / (LUAS_PANCANG * PLOT);
        kerimbunan_total += pancang[i]['luas'];
        frekuensi_total += pancang[i]['frekuensi'];
        kerapatan_total += pancang[i]['kerapatan'];
    }

    for (i = 0; i < pancang.length; i++) {
        pancang[i]['inp'] = (pancang[i]['kerapatan']/kerapatan_total + pancang[i]['frekuensi']/frekuensi_total + pancang[i]['luas']/kerimbunan_total) * 100;
    }

    return res.json(pancang);
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

    const pancang = await Pancang.create(req.body);

    return res.json(pancang);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let pancang = await Pancang.findByPk(id, {
        plain: true
    });

    if (!pancang) {
        return res.status(404).json({ message: "Pancang tidak ditemukan"})
    }

    pancang['keliling'] = Number(pancang['keliling'])

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

    pancang = await pancang.update(req.body);

    return res.json(pancang);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const pancang = await Pancang.findByPk(id);

    if (!pancang) {
        return res.status(404).json({ message: "Pancang tidak ditemukan"})
    }

    await pancang.destroy();

    res.json({ message: "Berhasil menghapus pancang"})
})

module.exports = router
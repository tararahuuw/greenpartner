var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { Pohon, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const pohon = await Pohon.findAll({
        raw: true
    });

    for (i = 0; i < pohon.length; i++) {
        pohon[i]['keliling'] = Number(pohon[i]['keliling']);
        pohon[i]['plot'] = Number(pohon[i]['plot']);
    }

    return res.json(pohon);
})


router.get('/statistics', async (req, res) => {
    const LUAS_POHON = 0.04;
    const PLOT = await Pohon.max('plot');

    const pohon = await Pohon.findAll({ 
        attributes: [
            'nama_spesies', 
            [sequelize.fn('sum', sequelize.col('luas')), 'luas']
        ],
        group: 'nama_spesies',
        raw: true
    });

    const jumlah_pohon = await Pohon.findAll({
        attributes: [
            [sequelize.fn('count', sequelize.col('nama_spesies')), 'jumlah']
        ],
        group: 'nama_spesies',
        raw: true
    })

    var kerimbunan_total = 0;
    var frekuensi_total = 0;
    var kerapatan_total = 0;

    for (i = 0; i < pohon.length; i++) {
        pohon[i]['jumlah'] = jumlah_pohon[i]['jumlah'];
        pohon[i]['frekuensi'] = jumlah_pohon[i]['jumlah'] / PLOT;
        pohon[i]['kerapatan'] = jumlah_pohon[i]['jumlah'] / (LUAS_POHON * PLOT);
        kerimbunan_total += pohon[i]['luas'];
        frekuensi_total += pohon[i]['frekuensi'];
        kerapatan_total += pohon[i]['kerapatan'];
    }

    for (i = 0; i < pohon.length; i++) {
        pohon[i]['inp'] = (pohon[i]['kerapatan']/kerapatan_total + pohon[i]['frekuensi']/frekuensi_total + pohon[i]['luas']/kerimbunan_total) * 100;
    }

    return res.json(pohon);
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

    const pohon = await Pohon.create(req.body);

    return res.json(pohon);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let pohon = await Pohon.findByPk(id, {
        plain: true
    });

    if (!pohon) {
        return res.status(404).json({ message: "Pohon tidak ditemukan"})
    }

    pohon['keliling'] = Number(pohon['keliling']);
    pohon['plot'] = Number(pohon['plot'])

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

    pohon = await pohon.update(req.body);

    return res.json(pohon);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const pohon = await Pohon.findByPk(id);

    if (!pohon) {
        return res.status(404).json({ message: "Pohon tidak ditemukan"})
    }

    await pohon.destroy();

    res.json({ message: "Berhasil menghapus pohon"})
})

module.exports = router
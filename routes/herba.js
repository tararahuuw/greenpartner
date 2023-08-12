var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { Herba, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const herba = await Herba.findAll({
        raw: true
    });

    for (i = 0; i < herba.length; i++) {
        if (herba[i]['konversi_daubenmire']) {
            herba[i]['konversi_daubenmire'] = Number(herba[i]['konversi_daubenmire']);
        } else {
            herba[i]['konversi_daubenmire'] = null;
        }
        
    }

    return res.json(herba);
})


router.get('/statistics', async (req, res) => {
    const LUAS_POHON = 0.04;
    const PLOT = await Herba.max('plot');

    const herba = await Herba.findAll({
        attributes: [
            "nama_spesies",
            [sequelize.fn('count', sequelize.col('nama_spesies')), 'jumlah'],
            [sequelize.fn('sum', sequelize.col('kerimbunan')), 'kerimbunan']
        ],
        group: 'nama_spesies',
        raw: true
    })

    var frekuensi_total = 0;
    var kerimbunan_total = 0;

    for (i = 0; i < herba.length; i++) {
        herba[i]['frekuensi'] = herba[i]['jumlah'] / PLOT;;
        frekuensi_total += herba[i]['frekuensi'];
        kerimbunan_total += herba[i]['kerimbunan'];
    }

    for (i = 0; i < herba.length; i++) {
        herba[i]['inp'] = (herba[i]['kerimbunan']/kerimbunan_total + herba[i]['frekuensi']/frekuensi_total) * 100;
    }

    return res.json(herba);
})

router.post('/', async (req, res) => {
    const schema = {
        nama_spesies: "string",
        konversi_daubenmire: {
            type: "number",
            optional: true
        },
        kerimbunan: {
            type: "number",
            integer: true,
            optional: false
        },
        plot: {
            type: "number",
            integer: true,
            optional: false
        }
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }

    const herba = await Herba.create(req.body);

    return res.json(herba);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let herba = await Herba.findByPk(id, {
        plain: true
    });

    if (!herba) {
        return res.status(404).json({ message: "Herba tidak ditemukan"})
    }

    const schema = {
        nama_spesies: "string|optional",
        konversi_daubenmire: {
            type: "number",
            optional: true
        },
        kerimbunan: {
            type: "number",
            integer: true,
            optional: true
        },
        plot: {
            type: "number",
            integer: true,
            optional: true
        }
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }   

    herba = await herba.update(req.body);

    return res.json(herba);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const herba = await Herba.findByPk(id);

    if (!herba) {
        return res.status(404).json({ message: "Herba tidak ditemukan"})
    }

    await herba.destroy();

    res.json({ message: "Berhasil menghapus herba"})
})

module.exports = router
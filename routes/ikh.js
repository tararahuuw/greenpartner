var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();

const { IndeksKeanekaragamanHayati, sequelize } = require('../models')

router.get('/', async (req, res) => {
    const ikh = await IndeksKeanekaragamanHayati.findAll({
        raw: true
    });

    return res.json(ikh);
})


router.get('/statistics', async (req, res) => {
    const sum_jumlah_every_tahun = await IndeksKeanekaragamanHayati.findAll({
        attributes: [
            'tahun',
            [sequelize.fn('sum', sequelize.col('jumlah')), 'jumlah']
        ],
        group: 'tahun',
        raw: true
    })

    for (i = 0; i < sum_jumlah_every_tahun.length; i++) {
        sum_jumlah_every_tahun[i]['jumlah'] = Number(sum_jumlah_every_tahun[i]['jumlah']);

        var spesies_list = await IndeksKeanekaragamanHayati.findAll({
            where:{
                tahun: sum_jumlah_every_tahun[i]['tahun']
            },
            raw: true
        })

        var ikh = 0;
        for (j = 0; j < spesies_list.length; j++) {
            ikh += -1 * spesies_list[j]['jumlah']/sum_jumlah_every_tahun[i]['jumlah'] * Math.log(spesies_list[j]['jumlah']/sum_jumlah_every_tahun[i]['jumlah'])
        }

        sum_jumlah_every_tahun[i]['ikh'] = ikh;
    }

    return res.json(sum_jumlah_every_tahun);
})

router.get('/statistics/:tahun', async (req, res) => {
    const tahun = req.params.tahun;

    var species_list = await IndeksKeanekaragamanHayati.findAll({
        attributes: [
            'nama_spesies',
            'jumlah'
        ],
        where: {
            tahun: tahun
        },
        raw: true
    })

    const jumlah_per_tahun = await IndeksKeanekaragamanHayati.findAll({
        attributes: [
            [sequelize.fn('sum', sequelize.col('jumlah')), 'jumlah']
        ],
        where: {
            tahun: tahun
        },
        raw: true
    })

    jumlah_per_tahun[0]['jumlah'] = Number(jumlah_per_tahun[0]['jumlah']);

    var sum_pi_ln_pi = 0;
    for (i = 0; i < species_list.length; i++) {
        species_list[i]['pi'] = species_list[i]['jumlah']/jumlah_per_tahun[0]['jumlah']
        species_list[i]['ln_pi'] = Math.log(species_list[i]['pi'])
        species_list[i]['pi_ln_pi'] = -1 * species_list[i]['pi'] * species_list[i]['ln_pi']
        sum_pi_ln_pi += species_list[i]['pi_ln_pi']
    }
    return res.json({ species_list, jumlah_per_tahun, sum_pi_ln_pi })
})

router.post('/', async (req, res) => {
    const schema = {
        nama_spesies: "string",
        famili: "string|optional",
        jumlah: {
            type: "number",
            integer: true,
            optional: false
        },
        tahun: {
            type: "number",
            integer: true,
            optional: false
        }
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }

    const ikh = await IndeksKeanekaragamanHayati.create(req.body);

    return res.json(ikh);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let ikh = await IndeksKeanekaragamanHayati.findByPk(id, {
        plain: true
    });

    if (!ikh) {
        return res.status(404).json({ message: "IndeksKeanekaragamanHayati tidak ditemukan"})
    }

    const schema = {
        nama_spesies: "string|optional",
        famili: "string|optional",
        jumlah: {
            type: "number",
            integer: true,
            optional: true
        },
        tahun: {
            type: "number",
            integer: true,
            optional: true
        }
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }   

    ikh = await ikh.update(req.body);

    return res.json(ikh);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const ikh = await IndeksKeanekaragamanHayati.findByPk(id);

    if (!ikh) {
        return res.status(404).json({ message: "Data ikh tidak ditemukan"})
    }

    await ikh.destroy();

    res.json({ message: "Berhasil menghapus data ikh"})
})

module.exports = router
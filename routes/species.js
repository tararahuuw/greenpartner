var  express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const { Species } = require('../models');

const v = new Validator();

router.get('/', async (req, res) => {
    // res.send('Species conn ok');

    const species = await Species.findAll();

    return res.json(species);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const species = await Species.findByPk(id);

    if (!species) {
        return res.status(404).json( { message: "Spesies tidak ditemukan"})
    }

    return res.json(species || {});
})

router.post('/', async (req, res) => {

    const schema = {
        nama_lokal: "string",
        nama_spesies: "string|optional",
        status_konservasi: "string|optional",
        taksonomi: "string|optional",
        karakteristik_vegetatif: "string|optional",
        karakteristik_generatif: "string|optional",
        jumlah_populasi_individu: "number|optional",
        sebaran: {
            type: "number",
            integer: true,
            optional: true
        },
        fun_fact: "string|optional",
        link_foto: "string|optional",
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({ message: "Nama lokal tidak dilampirkan"});
    }

    const species = await Species.create(req.body);

    res.json(species);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let species = await Species.findByPk(id);

    if (!species) {
        return res.status(404).json({ message: "Spesies tidak ditemukan" });
    }

    const schema = {
        nama_lokal: "string|optional",
        nama_spesies: "string|optional",
        status_konservasi: "string|optional",
        taksonomi: "string|optional",
        karakteristik_vegetatif: "string|optional",
        karakteristik_generatif: "string|optional",
        jumlah_populasi_individu: "number|optional",
        sebaran: {
            type: "number",
            integer: true,
            optional: true
        },
        fun_fact: "string|optional",
        link_foto: "string|optional",
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({ message: "Tipe data tidak sesuai"});
    }

    species = await species.update(req.body);
    res.json(species);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const species = await Species.findByPk(id);

    if (!species) {
        return res.status(404).json({ message: "Spesies tidak ditemukan"});
    }

    await species.destroy();

    res.json({ message: "Berhasil menghapus spesies"});
})

module.exports = router;
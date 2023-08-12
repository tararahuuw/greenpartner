var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const { Block } = require('../models');

const v = new Validator();

router.get('/', async (req, res) => {
    const block = await Block.findAll();

    return res.json(block);
})

router.get('/:nomor', async (req, res) => {
    const nomor = req.params.nomor;

    const block = await Block.findByPk(nomor);

    if (!block) {
        return res.status(404).json({ message: "Blok tidak ditemukan"});
    }

    res.json(block);
})

router.post('/', async (req, res) => {
    const schema = {
        blok: {
            type: "number",
            integer: true,
            optional: true
        },
        x: "string",
        y: "string",
        z: "string",
        family: "string|optional",
        nama_spesies: "string|optional",
        status: "string|optional",
        tinggi_batang: "string|optional",
        lebar_tajuk: "string|optional"
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({ message: "x, y, atau z tidak dilampirkan"});
    }

    const block = await Block.create(req.body);

    res.json(block);
})

router.put('/:nomor', async (req, res) => {
    const nomor = req.params.nomor;

    let block = await Block.findByPk(nomor);

    const schema = {
        blok: {
            type: "number",
            integer: true,
            optional: true
        },
        x: "string|optional",
        y: "string|optional",
        z: "string|optional",
        family: "string|optional",
        nama_spesies: "string|optional",
        status: "string|optional",
        tinggi_batang: "string|optional",
        lebar_tajuk: "string|optional"
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({ message: "Tipoe Data tidak sesuai"});
    }

    block = await block.update(req.body);

    return res.json(block);
})

router.delete('/:nomor', async (req, res) => {
    const nomor = req.params.nomor;

    const block = await Block.findByPk(nomor);

    if (!block) {
        return res.status(400).json({ message: "Blok tidak ditemukan"});
    }

    await block.destroy();
    res.json({ message: "Berhasil menghapus blok"});
})

module.exports = router;
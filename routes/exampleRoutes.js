const express = require('express');
const Example = require('../models/Example');
const router = express.Router();

// GET all examples
router.get('/', async (req, res) => {
    try {
        const examples = await Example.find();
        res.status(200).json(examples);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new example
router.post('/', async (req, res) => {
    try {
        const example = new Example(req.body);
        const savedExample = await example.save();
        res.status(201).json(savedExample);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

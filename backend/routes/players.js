// routes to retrieve players' rankings

const express = require('express');

const router = express.Router();

// GET all players
router.get('/', (req, res) => {
    res.json({mssg: 'GET all players'})
})

// GET one player
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET one player'})
})

// POST new player
router.post('/', (req, res) => {
    res.json({mssg: 'POST new player'})
})

// DELETE a player
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a player'})
})

// UPDATE a player
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a player'})
})

module.exports = router
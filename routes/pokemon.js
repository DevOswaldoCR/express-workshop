const express = require('express');
const pokemon = express.Router();
const sql = require('../config/database');
const router = express.Router();
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body.name);
});

pokemon.get("/", async (req,res, next) =>{
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});

// Buscar por ID
pokemon.get('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = req.params.id;
    try {
        const pkmn = await db.query("SELECT * FROM pokemon WHERE id = ?", [id]);

        if (pkmn.length > 0) {
            return res.status(200).json(pkmn);
        } else {
            return res.status(404).send("Pokemon no encontrado");
        }
    } catch (error) {
        return res.status(500).json({ error: "Error en la consulta" });
    }
});

// Buscar por Nombre
pokemon.get('/:name([A-Za-z]+)', async (req, res, next) => {
    const name = req.params.name;
    try {
        const pkmn = await db.query("SELECT * FROM pokemon WHERE name = ?", [name]);

        if (pkmn.length > 0) {
            return res.status(200).json(pkmn);
        } else {
            return res.status(404).send("Pokemon no encontrado");
        }
    } catch (error) {
        return res.status(500).json({ error: "Error en la consulta" });
    }
});

module.exports = pokemon;
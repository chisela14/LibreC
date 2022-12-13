const db = require('../models/db')
const { request, response } = require('express');
const Tapa = require('../models/tapa');

async function getTapas(req = request, res = response) {
    const { limit=5, skip=0} = req.query;
    const tapas = await Tapa.find().limit(Number(limit)).skip(Number(skip))
    res.json({ limit, skip, tapas})
}

async function getTapa(req = request, res = response) {
    const id = req.params.id;
    const tapa = await Tapa.findById({id})
    res.json(tapa)
}

async function addTapa(req = request, res = response){
    const {nombre, ingredientes, precio} = req.body;
    const tapa = new Tapa(nombre, ingredientes, precio);
    await tapa.save();
    res.json(tapa)
}

async function updateTapa (req = request, res = response){
    const id = req.params.id;
    const {...tapaBody} = req.body;
    const tapa =  await Tapa.findByIdAndUpdate(id, tapaBody)
    res.json(tapa)
}

async function deleteTapa (req = request, res = response){
    const id = req.params.id;
    const tapa = await Tapa.findByIdAndDelete(id)
    res.json(tapa)
}

module.exports = {getTapas, getTapa, addTapa, updateTapa, deleteTapa}
const { Schema, model } = require('mongoose');

const TapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    ingredientes: {
        type: String,
        required: [true, 'Los ingredientes son obligatorios'],
    },
    precio: {
        type: String,
        required: true
    },
});



module.exports = model( 'Tapa', TapaSchema );
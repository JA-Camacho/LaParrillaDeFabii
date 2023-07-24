const mongoose = require('mongoose');
const { Schema } = mongoose;

const platoSchema = new Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    tipo: { type: String, required: true},
    foto: { type: String, required: true}   
});

module.exports = mongoose.model('platos', platoSchema);
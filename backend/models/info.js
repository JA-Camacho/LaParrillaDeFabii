const mongoose = require('mongoose');
const { Schema } = mongoose;

const infoSchema = new Schema({
    nombre: { type: String, required: true },
    horaApertura: { type: String, required: true },
    horaCierre: { type: String, required: true },
    contacto: [{ type: String, required: true }],
    direccion: { type: String, required: true }
  });

module.exports = mongoose.model('info', infoSchema);
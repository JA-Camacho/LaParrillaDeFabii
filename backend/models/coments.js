const mongoose = require('mongoose');
const { Schema } = mongoose;

const comentsSchema = new Schema({
    correo: {type: String},
    comentario: {type: String, required: true},
    respuesta: {type: String}
});

module.exports = mongoose.model('comentarios', comentsSchema);
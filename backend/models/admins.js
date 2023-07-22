const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    usuario: {type: String, required: true},
    contra: {type: Number, required: true} 
});

module.exports = mongoose.model('admin', adminSchema);
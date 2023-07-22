const mongoose = require('mongoose');
const { Schema } = mongoose;
const menuSchema = new Schema({
    dia: {type: String, required: true},
    platos: [{ type: Schema.Types.ObjectId, ref: 'Plato' }]
});

module.exports = mongoose.model('menu_dia', menuSchema);
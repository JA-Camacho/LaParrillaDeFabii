const Plato = require('../models/plato');
const path = require('path');
const fs = require('fs-extra');
const platoCtrl = {};

platoCtrl.getPlatos = async (req, res) => {
    const plato = await Plato.find();
    res.json(plato);
};

platoCtrl.createPlato = async (req, res) => {
    try {
        const plato = new Plato({
            nombre: req.body.nombre,
            precio: req.body.precio,
            dia: req.body.dia,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            //fotoPath: req.file.path In Review
            foto: req.body.foto
        });
        await plato.save();
        res.json('Estado: plato guardado');
    } catch (err) {
        console.error('Error al guardar el plato:', err);
        res.status(500).json({ error: 'Error al guardar el plato' });
    }
}

platoCtrl.editPlato = async (req, res) => {
    const { id } = req.params;
    const plato = new Plato({
        nombre: req.body.nombre,
            precio: req.body.precio,
            dia: req.body.dia,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            fotoPath: req.file.path
    });
    await plato.findByIdAndUpdate(id, { $set: plato }, { new: true });
    res.json('Estado: plato actualizado');
}

platoCtrl.deletePlato = async (req, res) => {
    const plato = await Plato.findByIdAndRemove(req.params.id);
    /*if (plato){
        fs.unlink(path.resolve(plato.fotoPath));
    } In Review */
    res.json('Estado: plato eliminado');
};

module.exports = platoCtrl;
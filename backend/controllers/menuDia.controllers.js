const menu_dia = require('../models/menuDia');
const Plato = require('../models/plato')
const menu_diaCtrl = {};

menu_diaCtrl.getMenu = async (req, res) => {
    try {
        const menu = await menu_dia.find().populate('platos');
        res.json(menu);
    } catch (err) {
        console.error('Error al obtener los menús del día:', err);
        res.status(500).json({ error: 'Error al obtener los menús del día' });
    }
};

menu_diaCtrl.createMenu = async (req, res) => {
    try {
        const { dia, platos } = req.body;
        const platosSeleccionados = await Plato.find({ _id: { $in: platos } });
        const nuevoMenuDia = new menu_dia({
            dia,
            platos: platosSeleccionados.map(plato => plato._id)
        });
        await nuevoMenuDia.save();
        res.json('Estado: menú guardado');
    } catch (err) {
        console.error('Error al crear el menú del día:', err);
        res.status(500).json({ error: 'Error al crear el menú del día' });
    }
};

menu_diaCtrl.editMenu = async (req, res) => {
    try {
        const { id } = req.params; // ID del menú del día a editar
        const { dia, platos } = req.body; // Datos del menú del día desde el cuerpo de la solicitud
        const platosSeleccionados = await Plato.find({ _id: { $in: platos } });
        const menuActualizado = await menu_dia.findByIdAndUpdate(
            id,
            { dia, platos: platosSeleccionados.map(plato => plato._id) },
            { new: true }
        );
        res.json('Estado: menú actualizado');
    } catch (err) {
        console.error('Error al actualizar el menú del día:', err);
        res.status(500).json({ error: 'Error al actualizar el menú del día' });
    }
};

menu_diaCtrl.deleteMenu = async (req, res) => {
    await menu_dia.findByIdAndRemove(req.params.id);
    res.json('Estado: menu eliminado');
};

module.exports = menu_diaCtrl;
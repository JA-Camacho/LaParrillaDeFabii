const Info = require('../models/info');
const infoCtrl = {};

infoCtrl.getInfo = async (req, res) => {
    const info = await Info.find();
    res.json(info);
};

infoCtrl.createInfo = async (req, res) => {
    const info = new Info({
        nombre: req.body.nombre,
        horaApertura: req.body.horaApertura,
        horaCierre: req.body.horaCierre,
        contacto: req.body.contacto,
        direccion: req.body.direccion
    });
    await info.save();
    res.json('Estado: info guardado');
}

infoCtrl.editInfo = async (req, res) => {
    const { id } = req.params;
    const info = new Info({
        nombre: req.body.nombre,
        horaApertura: req.body.horaApertura,
        horaCierre: req.body.horaCierre,
        contacto: req.body.contacto,
        direccion: req.body.direccion
    });
    await info.findByIdAndUpdate(id, { $set: info }, { new: true });
    res.json('Estado: info actualizado');
}

infoCtrl.deleteInfo = async (req, res) => {
    await Info.findByIdAndRemove(req.params.id);
    res.json('Estado: info eliminado');
};

module.exports = infoCtrl;
const coments = require('../models/coments');
const comentsCtrl = {};

comentsCtrl.getComents = async (req, res) => {
    const coment = await coments.find();
    res.json(coment);
};

comentsCtrl.createComent = async (req, res) => {
    correo = '';
    if(req.body.correo)
        correo = req.body.correo;
    const coment = new coments({
        correo,
        comentario: req.body.comentario,
        respuesta: ''
    });
    await coment.save();
    res.json('Estado: comentario guardado');
}

comentsCtrl.editComent = async (req, res) => {
    const { id } = req.params;
    const { correo,comentario,respuesta } = req.body;
    await coments.findByIdAndUpdate(id, { correo, comentario, respuesta }, { new: true });
    res.json('Estado: comentario actualizado');
}

comentsCtrl.deleteComent = async (req, res) => {
    await coments.findByIdAndRemove(req.params.id);
    res.json('Estado: comentario eliminado');
};

module.exports = comentsCtrl;
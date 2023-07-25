const Admins = require('../models/admins');
const jwt = require('jsonwebtoken');
const adminsCtrl = {};

adminsCtrl.getAdmins = async (req, res) => {
    const admin = await Admins.find();
    res.json(admin);
};

adminsCtrl.getAcces = async (req, res) => {
    const admin = await Admins.findOne({usuario: req.body.usuario});
    if (!admin)
        return res.status(401).send("No existe el administrador");
    if (admin.contra !== req.body.contra)
        return res.status(401).send("Contraseña incorrecta");
    const token = jwt.sign({ _id: admin._id }, 'secretkey');
    return res.status(200).json({ token });
};

adminsCtrl.createAdmin = async (req, res) => {
    const admin = new Admins({
        usuario: req.body.usuario,
        contra: req.body.contra,
    });
    await admin.save();
    res.json('Estado: admin guardado');
}

adminsCtrl.editAdmin = async (req, res) => {
    const { id } = req.params;
    const admin = new Admins({
        usuario: req.body.usuario,
        contra: req.body.contra,
    });
    await admin.findByIdAndUpdate(id, { $set: admin }, { new: true });
    res.json('Estado: admin actualizado');
}

adminsCtrl.deleteAdmin = async (req, res) => {
    await Admins.findByIdAndRemove(req.params.id);
    res.json('Estado: admin eliminado');
};

module.exports = adminsCtrl;

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).send('Acceso no Autorizado');
    }
  
    if (token === 'null') {
      return res.status(401).send('Administrador no Autorizado');
    }
    if (!token.startsWith('Bearer ')) {
      return res.status(401).send('Acceso no Autorizado');
    }
  
    const tokenWithoutPrefix = token.slice(7);
  
    try {
      const payload = jwt.verify(tokenWithoutPrefix, 'secretkey');
      req.userId = payload._id;
      next();
    } catch (error) {
      return res.status(401).send('Token inválido');
    }
  }
  
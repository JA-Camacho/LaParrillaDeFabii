const Admins = require('../models/admins');
const adminsCtrl = {};

adminsCtrl.getAdmins = async (req, res) => {
    const admin = await Admins.find();
    res.json(admin);
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
    await admin.findByIdAndUpdate(id, {$set:admin}, {new:true});
    res.json('Estado: admin actualizado');
}

adminsCtrl.deleteAdmin = async (req, res) =>{
    await Admins.findByIdAndRemove(req.params.id);
    res.json('Estado: admin eliminado');
};

module.exports = adminsCtrl;
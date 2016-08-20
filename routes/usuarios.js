var usuarios = require('../models/usuarios').Usuarios;

exports.create = function (req, res) {
    usuarios.create({
        id_usuario: req.body.id_usuario,
        username: req.body.username,
        nombre1: req.body.nombre1,
        nombre2: req.body.nombre2,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        password: req.body.password,
        tipo: req.body.tipo,
    }).then(function () {
        res.json(200, 'Usuario creado');
    })
};


exports.index = function (req, res) {
    usuarios.findAll(
    ).then(function (users) {
        res.json(200, users)
    });
};

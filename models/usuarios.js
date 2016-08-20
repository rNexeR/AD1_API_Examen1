var Sequelize = require('sequelize');
var sequelize = new Sequelize('ad1_exa1', 'root', 'Password123!!');

var usuarios = sequelize.define("usuarios", {
    id_usuario: Sequelize.STRING,
    username: Sequelize.STRING,
    nombre1: Sequelize.STRING,
    nombre2: Sequelize.STRING,
    apellido1: Sequelize.STRING,
    apellido2: Sequelize.STRING,
    tipo: Sequelize.STRING,
    password: Sequelize.STRING
  });

module.exports = {
    Usuarios: usuarios
};
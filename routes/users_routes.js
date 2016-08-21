var users = require('../models/general');
var usersDel = require('../models/usuarios');

module.exports = {
    configure: function (app) {
        app.get('/usuarios', function (req, res) {
            users.get('usuarios', res);
        });

        app.get('/usuarios/:id', function (req, res) {
            users.getOne('usuarios', req.params.id, res);
        });

        app.post('/usuarios', function (req, res) {
            users.create('usuarios', req.body, res);
        });

        app.put('/usuarios', function (req, res) {
            usersDel.update('usuarios', req.body, res);
        });

        app.delete('/usuarios/:id', function (req, res) {
            usersDel.delete('usuarios', req.params.id, res);
        });

    }
};
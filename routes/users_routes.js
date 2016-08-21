var users = require('../models/general');

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
            users.update('usuarios', req.body, res);
        });

        app.delete('/usuarios/:id', function (req, res) {
            users.delete('usuarios', req.params.id, res);
        });

    }
};
var users = require('../models/usuarios');

module.exports = {
    configure: function (app) {
        app.get('/usuarios', function (req, res) {
            users.get(res);
        });

        app.get('/usuarios/:id', function (req, res) {
            users.getOne(req.params.id, res);
        });

        app.post('/usuarios', function (req, res) {
            users.create(req.body, res);
        });

        app.put('/usuarios', function (req, res) {
            users.update(req.body, res);
        });

        app.delete('/usuarios/:id', function (req, res) {
            users.delete(req.params.id, res);
        });

    }
};
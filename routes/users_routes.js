var users = require('../models/usuarios');

module.exports = {
    configure: function (app) {
        app.get('/usuarios', function (req, res) {
            users.get(res);
        });

        app.get('/usuarios', function (req, res) {
            users.getOne(req.body, res);
        });

        app.post('/usuarios', function (req, res) {
            users.create(req.body, res);
        });

        app.put('/usuarios', function (req, res) {
            users.update(req.body, res);
        });

        app.delete('/usuarios', function (req, res) {
            users.delete(req.body, res);
        });

    }
};
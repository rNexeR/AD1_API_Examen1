var users = require('../models/usuarios');
var crypto = require('crypto');

module.exports = {
    configure: function (app) {
        app.get('/usuarios', function (req, res) {
            users.get(res);
        });

        app.get('/usuarios', function (req, res) {
            users.getOne(req.body, res);
        });

        app.post('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest();
            users.create(req.body, res);
        });

        app.put('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest();
            users.update(req.body, res);
        });

        app.delete('/usuarios', function (req, res) {
            users.delete(req.body, res);
        });

    }
};
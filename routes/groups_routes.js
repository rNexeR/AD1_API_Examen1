var groups = require('../models/grupos');

module.exports = {
    configure: function (app) {
        app.get('/grupos', function (req, res) {
            groups.get(res);
        });

        app.get('/grupos/:id', function (req, res) {
            groups.getOne(req.params.id, res);
        });

        app.post('/grupos', function (req, res) {
            groups.create(req.body, res);
        });

        app.put('/grupos', function (req, res) {
            groups.update(req.body, res);
        });

        app.delete('/grupos/:id', function (req, res) {
            groups.delete(req.params.id, res);
        });

        app.post('/grupos/where', function (req, res) {
            groups.where(req.body, res);
        });

    }
};
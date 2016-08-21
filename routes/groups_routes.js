var groups = require('../models/grupos');

module.exports = {
    configure: function (app) {
        app.get('/grupos', function (req, res) {
            groups.get(res);
        });

        app.get('/grupos', function (req, res) {
            groups.getOne(req.body, res);
        });

        app.post('/grupos', function (req, res) {
            groups.create(req.body, res);
        });

        app.put('/grupos', function (req, res) {
            groups.update(req.body, res);
        });

        app.delete('/grupos', function (req, res) {
            groups.delete(req.body, res);
        });

    }
};
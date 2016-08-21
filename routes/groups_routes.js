var groups = require('../models/general');

module.exports = {
    configure: function (app) {
        app.get('/grupos', function (req, res) {
            groups.get('grupos', res);
        });

        app.get('/grupos/:id', function (req, res) {
            groups.getOne('grupos', req.params.id, res);
        });

        app.post('/grupos', function (req, res) {
            groups.create('grupos', req.body, res);
        });

        app.put('/grupos', function (req, res) {
            groups.update('grupos', req.body, res);
        });

        app.delete('/grupos/:id', function (req, res) {
            groups.delete('grupos', req.params.id, res);
        });

    }
};
var groups = require('../models/general');
var groupsDel = require('../models/grupos');

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
            groupsDel.update('grupos', req.body, res);
        });

        app.delete('/grupos', function (req, res) {
            groupsDel.delete('grupos', req.body, res);
        });

    }
};
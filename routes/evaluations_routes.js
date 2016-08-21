var evaluations = require('../models/general');

module.exports = {
    configure: function (app) {
        app.get('/evaluaciones', function (req, res) {
            evaluations.get('evaluaciones', res);
        });

        app.get('/evaluaciones/:id', function (req, res) {
            evaluations.getOne('evaluaciones', req.params.id, res);
        });

        app.post('/evaluaciones', function (req, res) {
            evaluations.create('evaluaciones', req.body, res);
        });

        app.put('/evaluaciones', function (req, res) {
            evaluations.update('evaluaciones', req.body, res);
        });

        app.delete('/evaluaciones/:id', function (req, res) {
            evaluations.delete('evaluaciones', req.params.id, res);
        });

    }
};
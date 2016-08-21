var evaluations = require('../models/general');
var evaluationsDel = require('../models/evaluaciones');

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
            evaluationsDel.update('evaluaciones', req.body, res);
        });

        app.delete('/evaluaciones/:id', function (req, res) {
            evaluationsDel.delete('evaluaciones', req.params.id, res);
        });

    }
};
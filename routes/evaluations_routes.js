var evaluations = require('../models/evaluaciones');

module.exports = {
    configure: function (app) {
        app.get('/evaluaciones', function (req, res) {
            evaluations.get(res);
        });

        app.get('/evaluaciones', function (req, res) {
            evaluations.getOne(req.body, res);
        });

        app.post('/evaluaciones', function (req, res) {
            evaluations.create(req.body, res);
        });

        app.put('/evaluaciones', function (req, res) {
            evaluations.update(req.body, res);
        });

        app.delete('/evaluaciones', function (req, res) {
            evaluations.delete(req.body, res);
        });

    }
};
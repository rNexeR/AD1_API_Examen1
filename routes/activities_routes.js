var activities = require('../models/actividades');

module.exports = {
    configure: function (app) {
        app.get('/actividades', function (req, res) {
            activities.get(res);
        });

        app.get('/actividades', function (req, res) {
            activities.getOne(req.body, res);
        });

        app.post('/actividades', function (req, res) {
            activities.create(req.body, res);
        });

        app.put('/actividades', function (req, res) {
            activities.update(req.body, res);
        });

        app.delete('/actividades', function (req, res) {
            activities.delete(req.body, res);
        });

    }
};
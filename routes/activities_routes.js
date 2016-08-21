var activities = require('../models/general');
var activitiesDel = require('../models/actividades');

module.exports = {
    configure: function (app) {
        app.get('/actividades', function (req, res) {
            activities.get('actividades', res);
        });

        app.get('/actividades/:id', function (req, res) {
            activities.getOne('actividades', req.params.id, res);
        });

        app.post('/actividades', function (req, res) {
            activities.create('actividades', req.body, res);
        });

        app.put('/actividades', function (req, res) {
            activitiesDel.update('actividades', req.body, res);
        });

        app.delete('/actividades/:id', function (req, res) {
            activitiesDel.delete('actividades', req.params.id, res);
        });

    }
};
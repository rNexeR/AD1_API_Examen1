var groupsActivities = require('../models/general');
var groupsActivities = require('../models/gruposActividades');

module.exports = {
    configure: function (app) {
        app.get('/gruposActividades', function (req, res) {
            groupsActivities.get('grupos_actividades', res);
        });

        // app.get('/gruposActividades/:id', function (req, res) {
        //     groupsActivities.getOne('grupos_actividades', req.params.id, res);
        // });

        app.post('/gruposActividades', function (req, res) {
            groupsActivities.create('grupos_actividades', req.body, res);
        });

        app.put('/gruposActividades', function (req, res) {
            groupsActivities.update('grupos_actividades', req.body, res);
        });

        app.delete('/gruposActividades/:id', function (req, res) {
            groupsActivities.delete('grupos_actividades', req.params.id, res);
        });

    }
};
var groupsActivities = require('../models/gruposActividades');

module.exports = {
    configure: function (app) {
        app.get('/gruposActividades', function (req, res) {
            groupsActivities.get(res);
        });

        app.get('/gruposActividades/:idG/:idA', function (req, res) {
            groupsActivities.getOne(req.params.idG, req.params.idA, res);
        });

        app.post('/gruposActividades', function (req, res) {
            groupsActivities.create(req.body, res);
        });

        app.put('/gruposActividades', function (req, res) {
            groupsActivities.update(req.body, res);
        });

        app.delete('/gruposActividades/:idG/:idA', function (req, res) {
            groupsActivities.delete(req.params.idG, req.params.idA, res);
        });

        app.post('/gruposActividades/where', function (req, res) {
            groupsActivities.where(req.body, res);
        });
    }
}
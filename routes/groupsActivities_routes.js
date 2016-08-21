var groupsActivities = require('../models/gruposActividades');

module.exports = {
    configure: function (app) {
        app.get('/gruposActividades', function (req, res) {
            groupsActivities.get(res);
        });

        app.get('/gruposActividades', function (req, res) {
            groupsActivities.getOne(req.body, res);
        });

        app.post('/gruposActividades', function (req, res) {
            groupsActivities.create(req.body, res);
        });

        app.put('/gruposActividades', function (req, res) {
            groupsActivities.update(req.body, res);
        });

        app.delete('/gruposActividades', function (req, res) {
            groupsActivities.delete(req.body, res);
        });
    }
}
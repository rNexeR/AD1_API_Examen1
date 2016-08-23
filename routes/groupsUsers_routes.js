var groupsUsers = require('../models/gruposUsuarios');

module.exports = {
    configure: function (app) {
        app.get('/gruposUsuarios', function (req, res) {
            groupsUsers.get(res);
        });

        app.get('/gruposUsuarios/:idG/:idU', function (req, res) {
            groupsUsers.getOne(req.params.idG, req.params.idU, res);
        });

        app.post('/gruposUsuarios', function (req, res) {
            groupsUsers.create(req.body, res);
        });

        app.put('/gruposUsuarios', function (req, res) {
            groupsUsers.update(req.body, res);
        });

        app.delete('/gruposUsuarios/:idG/:idU', function (req, res) {
            groupsUsers.delete(req.params.idG, req.params.idU, res);
        });

        app.post('/gruposUsuarios/where', function (req, res) {
            groupsUsers.where(req.body, res);
        });
    }
}
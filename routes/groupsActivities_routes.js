var groupsActivities = require('../models/gruposActividades');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/gruposActividades', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsActivities.get(res);
                }
            });
        });

        app.get('/gruposActividades/:idG/:idA', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsActivities.getOne(req.params.idG, req.params.idA, res);
                }
            });
        });

        app.post('/gruposActividades', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsActivities.create(req.body, res);
                }
            });
        });

        app.put('/gruposActividades', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsActivities.update(req.body, res);
                }
            });
        });

        app.delete('/gruposActividades/:idG/:idA', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsActivities.delete(req.params.idG, req.params.idA, res);
                }
            });
        });

        app.post('/gruposActividades/where', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsActivities.where(req.body, res);
                }
            });
        });
    }
}
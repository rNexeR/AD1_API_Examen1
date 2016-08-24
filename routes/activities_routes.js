var activities = require('../models/actividades');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/actividades', function (req, res) {
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    activities.get(res);
                }
            });
        });

        app.get('/actividades/:id', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    activities.getOne(req.params.id, res);
                }
            });
        });

        app.post('/actividades', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    activities.create(req.body, res);
                }
            });
        });

        app.put('/actividades', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    activities.update(req.body, res);
                }
            });
        });

        app.delete('/actividades/:id', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    activities.delete(req.params.id, res);
                }
            });
        });

        app.post('/actividades/where', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    activities.where(req.body, res);
                }
            });
        });

    }
};
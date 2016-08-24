var groupsUsers = require('../models/gruposUsuarios');
var token = require('../models/tokens').Tokens;
var tokenValidation = require('../models/tokenValidation');

module.exports = {
    configure: function (app) {
        app.get('/gruposUsuarios', function (req, res) {
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsUsers.get(res);
                }
            });
        });

        app.get('/gruposUsuarios/:idG/:idU', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsUsers.getOne(req.params.idG, req.params.idU, res);
                }
            });
        });

        app.post('/gruposUsuarios', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsUsers.create(req.body, res);
                }
            });
        });

        app.put('/gruposUsuarios', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsUsers.update(req.body, res);
                }
            });
        });

        app.delete('/gruposUsuarios/:idG/:idU', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsUsers.delete(req.params.idG, req.params.idU, res);
                }
            });
        });

        app.post('/gruposUsuarios/where', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groupsUsers.where(req.body, res);
                }
            });
        });
    }
}
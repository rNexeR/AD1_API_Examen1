var groups = require('../models/grupos');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/grupos', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groups.get(res);
                }
            });
        });

        app.get('/grupos/:id', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groups.getOne(req.params.id, res);
                }
            });
        });

        app.post('/grupos', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groups.create(req.body, res);
                }
            });
        });

        app.put('/grupos', function (req, res) {
            
            tokenSent = req.headers.token;

             tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groups.update(req.body, res);
                }
            });
        });

        app.delete('/grupos/:id', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groups.delete(req.params.id, res);
                }
            });
        });

        app.post('/grupos/where', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    groups.where(req.body, res);
                }
            });
        });

    }
};
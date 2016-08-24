var evaluations = require('../models/evaluaciones');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/evaluaciones', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    evaluations.get(res);
                }
            });
        });

        app.get('/evaluaciones/:id', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    evaluations.getOne(req.params.id, res);
                }
            });
        });

        app.post('/evaluaciones', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    evaluations.create(req.body, res);
                }
            });
        });

        app.put('/evaluaciones', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    evaluations.update(req.body, res);
                }
            });
        });

        app.delete('/evaluaciones/:id', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    evaluations.delete(req.params.id, res);
                }
            });
        });

         app.post('/evaluaciones/where', function (req, res) {
            
            tokenSent = req.headers.token;

            tokenValidation.validate(tokenSent, function(reply) {
                if(reply!=200){
                    res.send(reply[0], reply[1]);
                }else {
                    evaluations.where(req.body, res);
                }
            });
        });

    }
};
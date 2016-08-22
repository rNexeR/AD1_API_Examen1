var users = require('../models/usuarios');
var crypto = require('crypto');
var token = require('../models/tokens').Tokens; 


module.exports = {
    configure: function (app) {
        app.get('/usuarios', function (req, res) {
            users.get(res);
        });

        app.get('/usuarios/:id', function (req, res) {
            users.getOne(req.params.id, res);
        });

        app.post('/usuarios/where', function (req, res) {
            users.where(req.body, res);
        });

        app.post('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest();
            users.create(req.body, res);
        });

        app.put('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest();
            users.update(req.body, res);
        });

        app.delete('/usuarios/:id', function (req, res) {
            users.delete(req.params.id, res);
        });

        app.post('/login', function (req, res) {
            console.log(req.body);
            users.validate(req.body, res);
        });

        app.get('/token',function(req, res) {
            token.find({}, function(err, docs) {
                if(!err) {
                    res.json(200,docs);  
                } else {
                    res.json(500, { message: err });
                }
            });
        })

    }
};
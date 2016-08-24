var users = require('../models/usuarios');
var crypto = require('crypto');
var token = require('../models/tokens').Tokens;
var tokenValidation = require('../models/tokenValidation');


module.exports = {
    configure: function (app) {
        app.get('/usuarios', function (req, res) {

            tokenSent = req.headers.token;
            var reply = tokenValidation.validate(tokenSent, function() {

                if(reply !== 200) {
                    res.send(reply[0], reply[1]);
                }
                else {
                    users.get(res);
                }
            });
        });

        app.get('/usuarios/:id', function (req, res) {
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            users.getOne(req.params.id, res);
                        }
                        else {
                            res.send(401, 'Bad Token');
                        }
                    } else {
                        res.send(500, { message: er });
                    }
                });


            }
        });

        app.post('/usuarios/where', function (req, res) {

            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            users.where(req.body, res);
                        }
                        else {
                            res.send(401, 'Bad Token');
                        }
                    } else {
                        res.send(500, { message: er });
                    }
                });


            }
        });

        app.post('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest('hex');
            users.create(req.body, res);
        });

        app.put('/usuarios', function (req, res) {

            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            req.body.password = crypto.createHmac('sha256', req.body.password).digest('hex');
                            users.update(req.body, res);
                        }
                        else {
                            res.send(401, 'Bad Token');
                        }
                    } else {
                        res.send(500, { message: er });
                    }
                });


            }
        });

        app.delete('/usuarios/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            users.delete(req.params.id, res);
                        }
                        else {
                            res.send(401, 'Bad Token');
                        }
                    } else {
                        res.send(500, { message: er });
                    }
                });


            }
        });

        app.post('/login', function (req, res) {
            console.log(req.headers);
            users.validate(req.body, res);
        });

        app.get('/token', function (req, res) {
            token.find({}, function (err, docs) {
                if (!err) {
                    res.json(200, docs);
                } else {
                    res.json(500, { message: err });
                }
            });
        })

    }
};
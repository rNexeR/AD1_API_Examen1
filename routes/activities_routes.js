var activities = require('../models/actividades');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/actividades', function (req, res) {
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            activities.get(res);
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

        app.get('/actividades/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            activities.getOne(req.params.id, res);
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

        app.post('/actividades', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            activities.create(req.body, res);
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

        app.put('/actividades', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            activities.update(req.body, res);
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

        app.delete('/actividades/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            activities.delete(req.params.id, res);
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

        app.post('/actividades/where', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            activities.where(req.body, res);
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

    }
};
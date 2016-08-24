var groupsActivities = require('../models/gruposActividades');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/gruposActividades', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsActivities.get(res);
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

        app.get('/gruposActividades/:idG/:idA', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsActivities.getOne(req.params.idG, req.params.idA, res);
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

        app.post('/gruposActividades', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsActivities.create(req.body, res);
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

        app.put('/gruposActividades', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsActivities.update(req.body, res);
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

        app.delete('/gruposActividades/:idG/:idA', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsActivities.delete(req.params.idG, req.params.idA, res);
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

        app.post('/gruposActividades/where', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsActivities.where(req.body, res);
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
}
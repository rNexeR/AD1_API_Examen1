var evaluations = require('../models/evaluaciones');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/evaluaciones', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            evaluations.get(res);
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

        app.get('/evaluaciones/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            evaluations.getOne(req.params.id, res);
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

        app.post('/evaluaciones', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            evaluations.create(req.body, res);
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

        app.put('/evaluaciones', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            evaluations.update(req.body, res);
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

        app.delete('/evaluaciones/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            evaluations.delete(req.params.id, res);
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

         app.post('/evaluaciones/where', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!tokenSent)
                res.send(400, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            evaluations.where(req.body, res);
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
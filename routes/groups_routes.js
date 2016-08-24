var groups = require('../models/grupos');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/grupos', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groups.get(res);
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

        app.get('/grupos/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groups.getOne(req.params.id, res);
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

        app.post('/grupos', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groups.create(req.body, res);
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

        app.put('/grupos', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groups.update(req.body, res);
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

        app.delete('/grupos/:id', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groups.delete(req.params.id, res);
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

        app.post('/grupos/where', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groups.where(req.body, res);
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
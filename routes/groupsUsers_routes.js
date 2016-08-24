var groupsUsers = require('../models/gruposUsuarios');
var token = require('../models/tokens').Tokens;

module.exports = {
    configure: function (app) {
        app.get('/gruposUsuarios', function (req, res) {
            

            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsUsers.get(res);
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

        app.get('/gruposUsuarios/:idG/:idU', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!tokenSent)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsUsers.getOne(req.params.idG, req.params.idU, res);
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

        app.post('/gruposUsuarios', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsUsers.create(req.body, res);
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

        app.put('/gruposUsuarios', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsUsers.update(req.body, res);
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

        app.delete('/gruposUsuarios/:idG/:idU', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsUsers.delete(req.params.idG, req.params.idU, res);
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

        app.post('/gruposUsuarios/where', function (req, res) {
            
            tokenSent = req.headers.token;
            if (!token)
                res.send(401, 'Please send token');
            else {

                token.findOne({ token: tokenSent }, function (er, doc) {
                    if (!er) {
                        console.log(doc);
                        if (doc) {
                            //Model
                            groupsUsers.where(req.body, res);
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
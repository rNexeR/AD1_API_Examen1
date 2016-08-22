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

        app.post('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest();
            users.create(req.body, res);
        });

        app.put('/usuarios', function (req, res) {
            req.body.password = crypto.createHmac('sha256', req.body.password).digest();
            users.update(req.body, res);
        });

        app.delete('/usuarios', function (req, res) {
            users.delete(req.body, res);
        });

        app.post('/login', function (req, res) {
            users.validate(req.body, res);

          var users_name = req.body.id_usuario; // Name of users. 
          var password = req.body.password;  // Description of the users
          
          //Users.findOne({ name: users_name }, function(err, doc) {  // This line is case sensitive.
          token.findOne({ user: { $regex: new RegExp('^'+users_name+'$', "i") } }, function(err, doc) {  // Using RegEx - search is case insensitive
            if(!err && !doc) {
              
              var newToken = new token(); 

              newToken.name = users_name; 
              newToken.password = password; 
              newToken.date_created = new Date();;
              newToken.token = res;
              
              newToken.save(function(err) {

                if(!err) {
                  res.json(201, {message: "Users created with name: " + newToken.id_usuario });    
                } else {
                  res.json(500, {message: "Could not create users. Error: " + err});
                }

              });

            } else if(!err) {
              
              // User is trying to create a users with a name that already exists. 
              res.json(403, {message: "Users with that name already exists, please update instead of create or create a new users with a different name."}); 

            } else {
              res.json(500, { message: err});
            } 
          });
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
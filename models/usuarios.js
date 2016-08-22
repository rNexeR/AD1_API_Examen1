var connection = require('../connection');
var crypto = require('crypto');
var token = require('../models/tokens').Tokens; 

function users() {
    this.get = function (res) {
        connection.acquire(function(err, con){
            con.query('select * from usuarios', function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };

    this.create = function (user, res) {
        connection.acquire(function (err, con) {
            con.query('insert into usuarios set ?', user, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de Usuario fallida'});
                else    
                    res.json(200, {Message: 'Creacion de Usuario exitosa'});
            });
        });
    };

    this.update = function (user, res) {
        connection.acquire(function (err, con) {
            con.query('update usuarios set ? where id_usuario = ?', [user, user.id_usuario], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de Usuario fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de Usuario exitosa'});
            });
        });
    }

    this.delete = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('delete from usuarios where id_usuario = ?', [data.id_usuario], function (err, result) {
                con.release();
                if(err){
                    console.log(err);
                    res.json(500, {Message: 'Eliminacion de Usuario fallida'});
                }else
                    res.json(200, {Message: 'Eliminacion de Usuario exitosa'});
            });
        });
    }

    this.getOne = function (id, res) {
        connection.acquire(function(err, con){
            con.query('select * from usuarios where id_usuario = ?', id, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };


    this.validate = function (data, res) {
        connection.acquire(function(err, con){
            con.query('select id_usuario, tipo, password from usuarios where id_usuario = ? and password = ?', [data.id_usuario, data.password], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else{
                    //Token construction
                    var today = new Date();
                    var tokenToSend = result.id_usuario + today.toDateString();
                    tokenToSend = crypto.createHmac('sha256', tokenToSend).digest();
                    console.log(tokenToSend.toString());

                    var users_name = data.id_usuario; // Name of users. 
                    var password = data.password;  // Description of the users
  
                    /*token.findOne({ user: users_name }, function(err, doc){
                        if(!err) {
                            if(doc && doc.password == users_password)
                                res.json(200,doc);  
                            else
                                res.json(500, { message: err });
                        } else {
                            res.json(500, { message: err });
                        }
                    });*/

                    res.json(200, tokenToSend.toString());
                }
            })
        });
    };
}

module.exports = new users();
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
                    res.json(500, {Message: 'Creacion de Usuario fallida ' + err});
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

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from usuarios where id_usuario = ?', id, function (err, result) {
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

    this.where = function (data, res) {
        connection.acquire(function(err, con){
            con.query('select * from usuarios where ?', data, function (err, result) {
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
            data.password = crypto.createHmac('sha256', data.password).digest('hex');
            con.query('select * from usuarios where id_usuario = ? and password = ?', [data.id_usuario, data.password], function (errr, result) {
                con.release();
                if(result == ''){
                    res.json(500, {Error: errr});
                }else{
                    //Token construction
                     var today = new Date();
                     console.log('Fecha actual: ' + today);
                     var tokenToSend = result.id_usuario + today.toDateString();
                     tokenToSend = crypto.createHmac('sha256', tokenToSend).digest('hex');

                     var user_name = data.id_usuario; // Name of users. 
  
                     token.findOne({token: tokenToSend, user: data.id_usuario }, function(er, doc){
                         if(!er) {
                             console.log(doc);
                             if(doc){
                                 console.log("Session already active");
                                 res.send(200, {token: tokenToSend, result});
                             }
                             else {
                                 var newToken = new token({
                                     user: user_name,
                                     token: tokenToSend.toString()
                                 });
                                 console.log(data);
                                 newToken.save(function(error) {
                                     console.log(error);
                                     if(!error) {
                                         res.json(200, {token: newToken.token, result});
                                     } else {
                                         res.send(500, { message: error });
                                     }
                                 });
                             }
                         } else {
                             res.send(500, { message: er });
                         }
                     });
                    /*if(err)
                        res.json(500, {message: "error"});
                    else
                        res.json(200, result);*/
                }
            })
        });
    };
}

module.exports = new users();
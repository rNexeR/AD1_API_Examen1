var connection = require('../connection');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webTokens');
var db = mongoose.connection;
var crypto = require('crypto');

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


    /*this.validate = function (data, res) {
        connection.acquire(function(err, con){
            con.query('select count(id_usuario) as user from usuarios where id_usuario = ? and password = ?', [data.id_usuario, data.password], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else{
                    //Token construction
                    var today = new Date();
                     var token = result.id_usuario + today;
                     token = crypto.createHmac('sha256', token).digest();

                     //mongoose connection attempt
                     //On error Event
                     db.on('error', console.error.bind(console, 'connection error:'));

                     //If we successfully connect
                     db.once('open', function() {

                        var cryptoSchema = mongoose.Schema({
                            name: String
                        });

                        var cryptoModel = mongoose.model('crypto', cryptoSchema);

                        var newLog = new cryptoModel({ usuario: result.id_usuario, tipo: result.tipo,fecha: today, token: token });

                        newLog.save(function (err) {

                             if (err) 
                                return console.error(err);
                            else
                                console.log("Success");
                        });

                     });

                    res.json(200, token);
                }
            })
        });
    };*/
}

module.exports = new users();
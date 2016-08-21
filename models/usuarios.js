var connection = require('../connection');

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

    this.getOne = function (data, res) {
        connection.acquire(function(err, con){
            con.query('select * from usuarios where id_usuario = ?', [data.id_usuario], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new users();
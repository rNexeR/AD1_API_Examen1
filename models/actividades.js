var connection = require('../connection');

function activities() {
    this.get = function (res) {
        connection.acquire(function(err, con){
            con.query('select * from actividades', function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };

    this.create = function (activity, res) {
        connection.acquire(function (err, con) {
            con.query('insert into actividades set ?', activity, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de Actividad fallida'});
                else    
                    res.json(200, {Message: 'Creacion de Actividad exitosa'});
            });
        });
    };

    this.update = function (activity, res) {
        connection.acquire(function (err, con) {
            con.query('update actividades set ? where id_actividad = ?', [activity, activity.id_actividad], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de Actividad fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de Actividad exitosa'});
            });
        });
    }

    this.delete = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('delete from actividades where id_actividad = ?', [data.id_actividad], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de Actividad fallida'});
                else
                    res.json(200, {Message: 'Eliminacion de Actividad exitosa'});
            });
        });
    }

    this.getOne = function (id, res) {
        connection.acquire(function(err, con){
            con.query('select * from actividades where id_actividad = ?', id, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new activities();
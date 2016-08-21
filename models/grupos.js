var connection = require('../connection');

function groups() {
    this.get = function (res) {
        connection.acquire(function(err, con){
            con.query('select * from grupos', function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };

    this.create = function (group, res) {
        connection.acquire(function (err, con) {
            con.query('insert into grupos set ?', group, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de Grupo fallida'});
                else    
                    res.json(200, {Message: 'Creacion de Grupo exitosa'});
            });
        });
    };

    this.update = function (group, res) {
        connection.acquire(function (err, con) {
            con.query('update grupos set ? where id_grupo = ?', [group, group.id_Grupo], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de Grupo fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de Grupo exitosa'});
            });
        });
    }

    this.delete = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('delete from grupos where id_grupo = ?', [data.id_Grupo], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de Grupo fallida'});
                else
                    res.json(200, {Message: 'Eliminacion de Grupo exitosa'});
            });
        });
    }

    this.getOne = function (id, res) {
        connection.acquire(function(err, con){
            con.query('select * from grupos where id_grupo = ?', id, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new groups();
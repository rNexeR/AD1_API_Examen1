var connection = require('../connection');

function groupsUsers() {

        this.get = function (res) {
        connection.acquire(function(err, con){
            con.query('select * from grupos_usuarios', function (err, result) {
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
            con.query('insert into grupos_usuarios set ?', activity, function (err, result) {
                console.log(activity);
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de grupo fallida'});
                else    
                    res.json(200, {Message: 'Creacion de grupo exitosa'});
            });
        });
    };

    this.update = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('update grupos_usuarios set ? where id_grupo = ?', [data, data.id_grupo], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de grupo fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de grupo exitosa'});
            });
        });
    }

    this.delete = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('delete from grupos_usuarios where id_grupo = ? and id_usuario = ?', [data.id_grupo, data.id_usuario], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de grupo fallida'});
                else
                    res.json(200, {Message: 'Eliminacion de grupo exitosa'});
            });
        });
    }

        this.getOne = function (idG, idU, res) {
        connection.acquire(function(err, con){
            con.query('select * from grupos_usuarios where id_grupo = ? and id_usuario = ?', [idG, idU], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new groupsUsers();
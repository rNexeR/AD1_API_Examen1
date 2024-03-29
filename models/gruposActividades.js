var connection = require('../connection');

function groupsActivities() {

        this.get = function (res) {
        connection.acquire(function(err, con){
            //select g.nombre as nombre_grupo, g.id_grupo, a.nombre as nombre_actividad, a.id_actividad from grupos_actividades gA inner join grupos g on gA.id_grupo = g.id_grupo inner join actividades a on a.id_actividad = gA.id_actividad
            con.query('select g.nombre as nombre_grupo, g.id_grupo, a.nombre as nombre_actividad, a.id_actividad from grupos_actividades gA inner join grupos g on gA.id_grupo = g.id_grupo inner join actividades a on a.id_actividad = gA.id_actividad', function (err, result) {
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
            con.query('insert into grupos_actividades set ?', activity, function (err, result) {
                console.log(activity);
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de Actividad fallida'});
                else    
                    res.json(200, {Message: 'Creacion de Actividad exitosa'});
            });
        });
    };

    this.update = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('update grupos_actividades set ? where id_grupo = ? and id_actividad', [data, data.id_grupo, data.id_actividad], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de actividad fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de actividad exitosa'});
            });
        });
    };

    this.delete = function (idG, idA, res) {
        connection.acquire(function (err, con) {
            con.query('delete from grupos_actividades where id_grupo = ? and id_actividad = ?', [idG, idA], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de actividad fallida'});
                else
                    res.json(200, {Message: 'Eliminacion de actividad exitosa'});
            });
        });
    };

        this.getOne = function (idG, idA, res) {
        connection.acquire(function(err, con){
            con.query('select * from grupos_actividades where id_grupo = ? and id_actividad = ?', [idG, idA], function (err, result) {
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
            con.query('select gu.id_usuario, g.nombre as nombre_grupo, g.id_grupo, a.nombre as nombre_actividad, a.id_actividad from grupos_actividades gA inner join grupos g on gA.id_grupo = g.id_grupo inner join actividades a on a.id_actividad = gA.id_actividad inner join grupos_usuarios gu on gu.id_grupo = g.id_grupo where ?', data, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new groupsActivities();
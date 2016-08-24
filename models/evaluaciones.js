var connection = require('../connection');

function evaluations() {
    this.get = function (res) {
        connection.acquire(function(err, con){
            con.query('select e.id_actividad, e.id_evaluacion, e.id_grupo, a.nombre as nombre_actividad, g.nombre as nombre_grupo, id_usuario, id_evaluador, calificacion from evaluaciones e inner join actividades a on e.id_actividad = a.id_actividad inner join grupos g on g.id_grupo = e.id_grupo', function (err, result) {
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
            con.query('insert into evaluaciones set ?', group, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de Evaluacion fallida: ' + err});
                else    
                    res.json(200, {Message: 'Creacion de Evaluacion exitosa'});
            });
        });
    };

    this.update = function (group, res) {
        connection.acquire(function (err, con) {
            con.query('update evaluaciones set ? where id_evaluacion = ?', [group, group.id_evaluacion], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de Evaluacion fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de Evaluacion exitosa'});
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from evaluaciones where id_evaluacion = ?', id, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de Evaluacion fallida'});
                else
                    res.json(200, {Message: 'Eliminacion de Evaluacion exitosa'});
            });
        });
    };

    this.getOne = function (id, res) {
        connection.acquire(function(err, con){
            con.query('select * from evaluaciones where id_evaluacion = ?',  id, function (err, result) {
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
            con.query('select e.id_actividad, e.id_evaluacion, e.id_grupo, a.nombre as nombre_actividad, g.nombre as nombre_grupo, id_usuario, id_evaluador, calificacion from evaluaciones e inner join actividades a on e.id_actividad = a.id_actividad inner join grupos g on g.id_grupo = e.id_grupo where ?', data, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new evaluations();
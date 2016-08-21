var connection = require('../connection');

function groupsActivities() {

    this.update = function (data, res) {
        connection.acquire(function (err, con) {
            con.query('update grupos_actividades set ? where id_grupo = ?', [data, data.id_Grupo], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de actividad fallida'});
                else
                    res.json(200, {Message: 'Actualizacion de actividad exitosa'});
            });
        });
    }

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from grupos_actividades where id_grupo = ?', id, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de actividad fallida'});
                else
                    res.json(200, {Message: 'Eliminacion de actividad exitosa'});
            });
        });
    }
}

module.exports = new groupsActivities();
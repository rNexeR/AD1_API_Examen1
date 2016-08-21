var connection = require('../connection');

function general() {
    this.get = function (table, res) {
        connection.acquire(function(err, con){
            console.log(table);
            con.query('select * from ' + table, function (err, result) {
                con.release();
                if(err){
                    console.log(err);
                    res.json(500, {Error: err});
                }else
                    res.json(200, result);
            })
        });
    };

    this.create = function (table, activity, res) {
        connection.acquire(function (err, con) {
            con.query('insert into ' + table +' set ?', activity, function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Creacion de ' + table +' fallida'});
                else    
                    res.json(200, {Message: 'Creacion de ' + table +' exitosa'});
            });
        });
    };

    this.update = function (table, activity, res) {
        connection.acquire(function (err, con) {
            con.query('update ? set ? where id_actividad = ?', [table,activity, activity.id_Actividad], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Actualizacion de ' + table +' fallida'});
                else    
                    res.json(200, {Message: 'Actualizacion de ' + table +' exitosa'});
            });
        });
    }

    this.delete = function (table, id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from ? where id_actividad = ?', [table,id], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Message: 'Eliminacion de ' + table +' fallida'});
                else    
                    res.json(200, {Message: 'Eliminacion de ' + table +' exitosa'});
            });
        });
    }

    this.getOne = function (table, id, res) {
        connection.acquire(function(err, con){
            con.query('select * from ' + table +' where id_actividad = ?', [table,id], function (err, result) {
                con.release();
                if(err)
                    res.json(500, {Error: err});
                else
                    res.json(200, result);
            })
        });
    };
}

module.exports = new general();
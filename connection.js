var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: '',
      user: 'root',
      //Nexer
      ///*
      password: 'Password123!!',
      database: 'ad1_exa1'
      //*/

      //Josue
      /*
      password: 'pass123',
      database: 'ad1_t1'
      */
      
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();

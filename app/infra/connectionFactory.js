var mysql  = require('mysql');

function createDBConnection() {
    var env = process.env;
    return mysql.createConnection({
        host: env.MYSQL_HOST,
        user: env.MYSQL_USER,
        password: env.MYSQL_ROOT_PASSWORD,
        database: env.MYSQL_DATABASE
    });
}

module.exports = function() {
    return createDBConnection;
}

const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.134.27.235',
        user: 'root',
        password:'mypassword',
        database:'usersDB'
    });
    return conn;
}
module.exports = newConnection;
const mysql = require('mysql');
//Function for new connections
function newConnection()
{
    //All the info needed to connect to the database server
    let conn = mysql.createConnection({
        host:'35.224.29.198',
        user: 'root',
        password:'root',
        database:'usersDB'
    });
    return conn;
}
module.exports = newConnection;
//This is where I will initialize the database

const mysql = require('mysql');
//Create the db connection
//Contains all the info needed to connect to the database
const conn = mysql.createConnection({
    host:'35.224.29.198',
    user: 'root',
    password:'root',
    database:'usersDB'
});

conn.connect();

//Reset any tables that are already in place
conn.query(`Drop Table Time`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )

conn.query(`Drop Table Users`,
            (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Dropped');
            }
        )
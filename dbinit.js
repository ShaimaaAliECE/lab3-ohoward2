//this is where i will initialize the database

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'35.224.29.198',
    user: 'root',
    password:'root',
    database:'usersDB'
});

conn.connect();

//if there are tables in place already then reset them
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
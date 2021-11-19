const newConnection = require('./DBconnection');

const conn = newConnection();
//Query to select all the times
conn.query( `select * from Time `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });
//Query to select all the users
conn.query( `select * from Users `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });
            


conn.end();
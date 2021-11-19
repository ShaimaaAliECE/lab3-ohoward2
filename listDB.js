const newConnection = require('./DBConnection');

const conn = newConnection();

conn.query( `select * from Time `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });

conn.query( `select * from Users `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });
            


conn.end();
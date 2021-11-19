const express = require('express');
const path = require('path');

// This object is for creating new db connections
const newConnection = require('./DBConnection');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('/static/index.html', { root: __dirname })
  })

app.use(express.urlencoded({
  extended: true
}))
//Gets the guest sign-in page
app.get('/guest', (req, res) => {
  res.sendFile('/static/guest.html', { root: __dirname })
})
//Gets the admin page
app.get('/admin', (req, res) => {
  res.sendFile('/static/admin.html', { root: __dirname })
})
//Posts the login info
app.post('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  //Sets message to "Access denied"
  let message = "Access denied";
//If the userName and password entered are correct then the user is sent a different page
//And the message "Welcome" is displayed on this other page
  if (userName == 'admin' && password == '123') {
    message = "Welcome";
    res.sendFile('/frontend/admin.html', { root: __dirname })
  }
  //If the incorrect userName and password are entered,
  //Then the message sent to the user is "Access denied"

  //Sends the message
  res.send(message)
})
//Gets the login info
app.get('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access denied";

  if (userName == 'admin' && password == '123') {
    message = "Welcome";
    res.sendFile('/static/admin.html', { root: __dirname })
  }

  res.send(message)
})
//Gets the info for adding a user
app.get('/add-user', (req,res) => {
  let conn = newConnection();
  conn.connect();
  console.log(req.query.T1);
  conn.query(`insert into Users values ('${req.query.name}','${req.query.T1}','${req.query.T2}','${req.query.T3}','${req.query.T4}','${req.query.T5}','${req.query.T6}','${req.query.T7}','${req.query.T8}','${req.query.T9}','${req.query.T10}')`
          ,(err,rows,fields) => {
              res.redirect('/');        
          } );

  conn.end();
})
//Get the info for adding new times
app.get('/add-times', (req,res) => {
  let conn = newConnection();
  conn.connect();
  console.log(req.query.T1);
  conn.query( `UPDATE Time SET  T1 = '${req.query.T1}', T2 = '${req.query.T2}', T3 = '${req.query.T3}', T4 = '${req.query.T4}', T5 = '${req.query.T5}', T6 = '${req.query.T6}', T7 = '${req.query.T7}', T8 = '${req.query.T8}', T9 = '${req.query.T9}', T10 = '${req.query.T10}'`
          , (err,rows,fields) => {
              if (err)
                  console.log(err);
              else
                  console.log('row updated');
                  res.redirect('/');
          });

  conn.end();
})

app.use(express.static('frontend'))

//As specified in the project instructions, make the app listen to port 80
app.listen(80);
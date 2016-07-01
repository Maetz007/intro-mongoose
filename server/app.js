var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//require model
var User = require('../models/user');

var userPost = require('../routes/userPost');
var userUpdate = require('../routes/userUpdate');
var userDelete = require('../routes/userDelete');
var userGet = require('../routes/userGet');

// get the express app
var app = express();

app.use('/', userPost);
app.use('/', userUpdate);
app.use('/', userDelete);
app.use('/', userGet);

//connect to the database - userDb is the database name
mongoose.connect('mongodb://localhost:27017/userDb');

//parse json
app.use(bodyParser.json());

// create route
// app.post('/create', function(req, res) {
//   console.log('hit create route');
//   console.log('req.body = ', req.body);
//
//   var newUser = new User({
//     name: req.body.name,
//     username: req.body.username,
//     password: req.body.password
//   });
//
//   newUser.save(function(err) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       console.log('User saved successfully!');
//       res.sendStatus(200);
//     }
//   });
// });

// server listen
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Listening on port ', port);
});

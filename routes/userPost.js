var express = require('express');
var path = require('path');

var postRoute = express.Router();

var User = require('../models/user');

// hard coded with name- Phillip J Fry
postRoute.post('/postNewUser', function(req, res) {
  console.log('in postNewUser route');
  var futurama = new User({
    name: 'Phillip J Fry',
    username: 'bender',
    password: 'planetexpress'
  });

  futurama.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('Saved successfully to the year 3000!');
      res.sendStatus(200);
    } // end else
  }); // end futurama.save
});//end "postRoute" route

module.exports = postRoute;

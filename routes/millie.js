var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var millieRoute = express.Router();

var User = require('../models/user');

//dummy-value get route. Dummy value meaning
//'hard coded' Millie
millieRoute.post('/millie', function(req, res) {
  console.log('in millieRoute');
  var millie = new User({
    name: 'Millie',
    username: 'millie11',
    password: 'reallybadpassword'
  });

  millie.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('User saved successfully!');
      res.sendStatus(200);
    }
  });
});//end millie get route

module.exports = millieRoute;

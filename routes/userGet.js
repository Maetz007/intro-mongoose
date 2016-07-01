var express = require('express');
var path = require('path');

var getUserRoute = express.Router();

var User = require('../models/user');

// get all users
getUserRoute.get('/getUser', function(req, res) {
  User.find({}, function(err, usersList) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      res.send(usersList);
    } // end else
  }); // end User.find
}); //end get all users

module.exports = getUserRoute;

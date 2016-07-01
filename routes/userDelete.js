var express = require('express');
var path = require('path');

var deleteRoute = express.Router();

var User = require('../models/user');

deleteRoute.delete('/deleteUser', function(req, res) {
  console.log('delete route');

  User.findOne({username: 'bender'}, function(err, userResult) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      User.remove({_id: userResult._id}, function(err) {});
      res.sendStatus(200);
    } // end else
  }); // end User.findOne
});// end delete route

module.exports = deleteRoute;

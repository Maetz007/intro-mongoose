var express = require('express');
var path = require('path');

var updateRoute = express.Router();

var User = require('../models/user');

//update "updateRoute" route
updateRoute.put('/updateUser', function(req, res) {
  console.log('hit put route - updateUser');

  //Hard coded to find one user with name "Phillip J Fry"
  User.findOne({name: 'Phillip J Fry'}, function(err, userResult) {
    console.log('find user result = ', userResult);

    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      userResult.name = "Professor Farnsworth";
      userResult.admin = false;

      userResult.save(function(err) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log('Update user = ', userResult._id);
          res.sendStatus(200);
        } // end else
      }); // end userResult.save
    } // end else
  }); // end User.findOne
}); //end updateRoute

module.exports = updateRoute;

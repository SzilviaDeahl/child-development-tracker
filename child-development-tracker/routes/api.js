var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/myTracker');
var Profile = db.get('profiles')

router.get('/profiles', function (req, res, next) {
  // Profile.find({}).then(function (err, profiles) {
    console.log('In the Profiles Route');
    res.json("you made it");
})

router.post('/profiles', function (req, res, next) {
  // Insert new profile into database
  // then respond with json
  res.json("Profile created")
})

module.exports = router;

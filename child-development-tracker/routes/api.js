var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/myTracker');
var Profile = db.get('profiles');

router.get('/profiles', function (req, res, next) {
  Profile.find({}).then(function(profiles) {
    console.log('In the Profiles Route');
    res.json("you made it");
 });
});

router.post('/profiles', function (req, res, next) {
  Profile.insert(
  {
    first: req.body.first,
    middle: req.body.middle,
    last: req.body.last,
    dob: req.body.dob
  }).then(function (response) {
    res.json("Profile created")
  })
});

module.exports = router;

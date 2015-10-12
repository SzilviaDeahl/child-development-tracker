var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/myTracker');
var Profile = db.get('profiles');

router.get('/profiles', function (req, res, next) {
  Profile.find({}).then(function(profiles) {
    console.log('In the Profiles Route');
    res.json(profiles);
 });
});

router.post('/profiles', function (req, res, next) {
  Profile.insert(
  {
    first: req.body.first,
    middle: req.body.middle,
    last: req.body.last,
    date: req.body.dob,
    time: req.body.tob
  }).then(function (response) {
    res.json(response)
  })
});

// router.get('/milestones', function (req, res, next) {
//   Profile.findOne({_id: req.params.id}).then(function (profiles) {
//     res.json(milestones)
//   })
// });



module.exports = router;

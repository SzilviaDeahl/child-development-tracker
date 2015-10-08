var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/myTracker');
var trackerCollection = db.get('tracker')

router.get('/tracker', function (req, res, next) {
  trackerCollection.find({}).then(function (tracker) {
    res.json(tracker);
  })
})

module.exports = router;

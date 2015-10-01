var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/myTracker');
var trackerCollection = db.get('tracker')

router.get('/', function (req, res, next) {
  trackerCollection.find({}, function (err, records) {
    res.render('index', { tracker: records})
  })
});

module.exports = router;

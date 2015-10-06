var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/myTracker');
var trackerCollection = db.get('tracker')

router.get('/', function (req, res, next) {
  trackerCollection.find({}, function (err, records) {
    res.render('index', { tracker: records})
  })
});

router.get('/new', function (req, res, next) {
  res.render('new')
});

router.post('/create', function (req, res, next) {
  trackerCollection.insert(req.body).then(function (err, record) {
    res.redirect('/index')
  })
});

module.exports = router;

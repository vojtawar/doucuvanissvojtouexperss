var express = require('express');
var router = express.Router();

/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Doucovani s Vojtou'});
});
router.get('/o_mne', function(req, res, next) {
    res.render('o_mne', { title: 'Doucovani s Vojtou'});
});
router.get('/co_doucuji', function(req, res, next) {
    res.render('co_doucuji', { title: 'Doucovani s Vojtou'});
});







module.exports = router;

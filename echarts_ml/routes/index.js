var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'echarts' });
});

router.get('/first', function(req, res, next) {
  res.render('first', { title: 'echarts_first' });
});
router.get('/two', function(req, res, next) {
  res.render('two', { title: 'echarts_two' });
});

module.exports = router;

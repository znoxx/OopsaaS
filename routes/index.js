var express = require('express');
var router = express.Router();
var stehi = require('../lib/stehi.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var poem = stehi.generatePoem();
  res.render('index', { title: "Универсальный Поэт-Стихоплёт", poem: poem });
});

/* GET json */

router.get('/json', function(req, res, next) {
  var poem = stehi.generatePoem();
  res.json(poem);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Myo = require('myo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/myonnaise', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/practice', function(req, res, next) {
  res.render('practice', { title: 'Express' });
});



Myo.connect('com.stolksdorf.myAwesomeApp', require('ws'));

Myo.on('connected', function(){
  console.log('connected!', this.name);
  //Myo.setLockingPolicy('none');
  //console.log(Myo.myos[0].name);
});







module.exports = router;

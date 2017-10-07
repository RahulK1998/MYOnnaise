var express = require('express');
var router = express.Router();
var Myo = require('myo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Myo.connect('com.stolksdorf.myAwesomeApp', require('ws'));

Myo.on('connected', function(){
  console.log('connected!', Myo.myos.id);
  Myo.setLockingPolicy('none');
});


Myo.on('fist', function(){
	console.log('Fist');
	this.vibrate();
});

Myo.on('wave_in', function(){
	console.log('Wave In!');
	this.vibrate();
});

Myo.on('wave_out', function(){
	console.log('Wave Out!');
	this.vibrate();
});

Myo.on('fingers_spread', function(){
	console.log('Fingers Spread!');
	this.vibrate();
});

Myo.on('double_tap', function(){
	console.log('Double Tap!');
	this.vibrate();
});




module.exports = router;

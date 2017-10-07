var express = require('express');
var router = express.Router();
var Myo = require('myo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Myo.connect('com.stolksdorf.myAwesomeApp', require('ws'));

Myo.on('connected', function(){
  console.log('connected!', this.name);
  Myo.setLockingPolicy('none');
  //console.log(Myo.myos[0].name);
});


Myo.on('fist', function(){
	if(this.name == "My Myo"){
		console.log('Fist 1!');
		this.vibrate();
	}
	
	if(this.name == "Evan 2"){
		console.log('Fist 2!');
		this.vibrate();
	}
});

Myo.on('wave_in', function(){
	if(this.name == "My Myo"){
		console.log('Wave In 1!');
		this.vibrate();
	}
	
	if(this.name == "Evan 2"){
		console.log('Wave In 2!');
		this.vibrate();
	}
	
});

Myo.on('wave_out', function(){
	if(this.name == "My Myo"){
		console.log('Wave Out 1!');
		this.vibrate();
	}
	
	if(this.name == "Evan 2"){
		console.log('Wave Out 2!');
		this.vibrate();
	}
});

Myo.on('fingers_spread', function(){
	if(this.name == "My Myo"){
		console.log('Fingers Spread 1!');
		this.vibrate();
	}
	
	if(this.name == "Evan 2"){
		console.log('Fingers Spread 2!');
		this.vibrate();
	}
});

Myo.on('double_tap', function(){
	if(this.name == "My Myo"){
		console.log('Double Tap 1!');
		this.vibrate();
	}
	
	if(this.name == "Evan 2"){
		console.log('Double Tap 2!');
		this.vibrate();
	}
});




module.exports = router;

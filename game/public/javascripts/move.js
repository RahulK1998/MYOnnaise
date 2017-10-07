Myo.connect('com.stolksdorf.myAwesomeApp');

Myo.on('connected', function(){
  Myo.setLockingPolicy('none');

});
Myo.on('fist', function(){
	Myo.setLockingPolicy('none');
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
	Myo.setLockingPolicy('none');
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
	Myo.setLockingPolicy('none');
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
	Myo.setLockingPolicy('none');
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
	Myo.setLockingPolicy('none');
	if(this.name == "My Myo"){
		console.log('Double Tap 1!');
		this.vibrate();
	}
	
	if(this.name == "Evan 2"){
		console.log('Double Tap 2!');
		this.vibrate();
	}
});
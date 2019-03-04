(() => {
	console.log("Fired! Ready to jam");

	function playDrumKitSound(event) {
		// debugger;
		// // Select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		// console.log(audio);
		// 
		// Debuging /error handling
		//If we dont have a matching audio element, then kill the function
		if (!audio) {return; } //return stops code excution

		//rewind audio on every click and make it play
		
		audio.currentTime = 0;
		audio.play();

		//grab the div and animate it 
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');
	}

	function removePlayingClass(event) {
		// debugger; 
		if (event.propertyName !== "transform") {
			return;
		} 
		else {
			//remive the playing class here from the active div
			
			console.log('transition is done'), `${event.propertyName}`;
			event.target.classList.remove('playing');
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitioned", removePlayingClass));
	window.addEventListener("keydown", playDrumKitSound);
})();

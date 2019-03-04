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
	}
	window.addEventListener("keydown", playDrumKitSound);
})();

var video;

let vid = document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	vid.autoplay = false;
	console.log("Autoplay is False")
	vid.loop = false;
	console.log("Loop is False")
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
	
/*Play Button: Play the video and update the volume information. */


const playButton = document.getElementById("play");

playButton.addEventListener("click", function() {
 vid.play();
});


/*Pause Button: Pause the video. */

const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function() {
 vid.pause();
});


/*Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  */

const slowDownButton = document.getElementById("slower");

slowDownButton.addEventListener("click", () => {
  let currentRate = vid.playbackRate;
  let newRate = currentRate * 0.9;
  vid.playbackRate = newRate;
  console.log(newRate)
});

/*Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again. */

const speedUpButton = document.getElementById("faster");

speedUpButton.addEventListener("click", () => {
  let currentRate = vid.playbackRate;
  let newRate = currentRate * 1.1;
  vid.playbackRate = newRate;
  console.log(newRate)
});

/*Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video. */



/*Mute: Mute/unmute the video and update the text in the button. */



/*Volume Slider: Change the volume based on the slider and update the volume information. */




/*Styled: Utilize the existing oldSchool class on the video element */




/*Original: Remove the oldSchool class from the video. */


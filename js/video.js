var video;

let vid = document.getElementById("player1");
let volume = document.getElementById("volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	vid.autoplay = false;
	console.log("Autoplay is False");
	vid.loop = false;
	console.log("Loop is False");
  vid.volume = 1;
  console.log(vid.volume);
  volume.innerHTML = "100%";
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

const skipAheadButton = document.getElementById("skip");

skipAheadButton.addEventListener("click", () => {
  let currentTime = vid.currentTime;
  let newTime = currentTime + 10;
  if (newTime > vid.duration){
    vid.currentTime = 0;
    console.log(newTime)
  } else {
    vid.currentTime = newTime;
    console.log(newTime)
  }
});

/*Mute: Mute/unmute the video and update the text in the button. */

const muteButton = document.getElementById("mute");

muteButton.addEventListener("click", () => {
  vid.muted = true;
  console.log("0%")
  volume.innerHTML = "0%"
});

/*Volume Slider: Change the volume based on the slider and update the volume information. */




/*Styled: Utilize the existing oldSchool class on the video element */

const oldSchoolButton = document.getElementById("vintage");

oldSchoolButton.addEventListener("click", () => {
  video.classList.add("oldSchool");
});


/*Original: Remove the oldSchool class from the video. */

const originalButton = document.getElementById("orig");

originalButton.addEventListener("click", () => {
  vid.classList.remove("oldSchool");
});

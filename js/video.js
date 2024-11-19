var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

/*Page load: Initialize the video element and turn off autoplay and turn off looping. */

window.addEventListener ("load", function() {
	const video = document.getElementById("myVideo");
	video.src = "assets/marchingband.mov";
	video.autoplay = false;
	video.loop = false;
});
	


/*Play Button: Play the video and update the volume information. */

const video = document.getElementsByClass("video");
const playButton = document.getElementById("play");

playButton.addEventListener("click", function() {
 video.play();
});


/*Pause Button: Pause the video. */

const video = document.getElementsByClass("video");
const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function() {
 video.pause();
});


/*Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  */



/*Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again. */



/*Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video. */



/*Mute: Mute/unmute the video and update the text in the button. */



/*Volume Slider: Change the volume based on the slider and update the volume information. */




/*Styled: Utilize the existing oldSchool class on the video element */




/*Original: Remove the oldSchool class from the video. */


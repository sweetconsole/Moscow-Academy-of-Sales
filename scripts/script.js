const introVideo = document.getElementById("introVideo");

let playingIntroVideo = false

function toggleVideo() {
	playingIntroVideo = !playingIntroVideo

	if (playingIntroVideo) {
		introVideo.load()
	} else {
		introVideo.play()
	}
}
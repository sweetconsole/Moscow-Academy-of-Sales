const introVideo = document.getElementById("introVideo");

let playingIntroVideo = false

function toggleVideo() {
	if (playingIntroVideo) {
		introVideo.load()
	} else {
		introVideo.play()
	}

	playingIntroVideo = !playingIntroVideo
}
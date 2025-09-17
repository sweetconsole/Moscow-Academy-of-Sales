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

new Swiper(".partners-swiper", {
	slidesPerView: 5,
	spaceBetween: 57,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl:".partners-button-next",
		prevEl: ".partners-button-prev",
	},
});

new Swiper(".gallery_swiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl:".gallery_button_next",
		prevEl: ".gallery_button_prev",
	},
});
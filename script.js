let currentIndex = 0; // This will track the index of the first visible card

const slides = document.querySelectorAll('.carousel-slide'); // All the slides
const totalSlides = slides.length; // Total number of slides
const visibleCards = window.innerWidth <= 768 ? 1 : 3; // Number of cards to show at a time

function moveSlide(direction) {
	// Update currentIndex based on the direction
	currentIndex += direction;

	// Loop around if we go out of bounds
	if (currentIndex >= totalSlides - visibleCards + 1) {
		currentIndex = 0; // Go back to the first set of cards
	} else if (currentIndex < 0) {
		currentIndex = totalSlides - visibleCards; // Go to the last set of cards
	}

	// Update the carousel position by shifting the transform property
	updateCarousel();
}

function updateCarousel() {
	const carousel = document.querySelector('.carousel');

	// Adjust the translation to move the carousel properly based on visible cards
	const slideWidth = 100 / visibleCards; // Calculate the width of each slide
	carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

window.addEventListener('resize', () => {
	const newVisibleCards = window.innerWidth <= 768 ? 1 : 3;
	if (newVisibleCards !== visibleCards) {
		// Update the visible cards number and reset the carousel position
		visibleCards = newVisibleCards;
		currentIndex = 0; // Reset to the first set of slides
		updateCarousel();
	}
});

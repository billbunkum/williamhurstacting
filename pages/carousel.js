const baseURL = '/assets/headshots/';
const imagePaths = [
	'serious-straight-headshot.jpg',
  'earnest.jpg',
	'seedy-detective.png',
	'jean-jacket.jpg',
	'on-set.jpeg',
]

const imageElement = document.getElementsByClassName('carousel_image');
const prevButton = document.getElementsByClassName('prev-button');
const playButton = document.getElementsByClassName('play-button');
const pauseButton = document.getElementsByClassName('pause-button');
const nextButton = document.getElementsByClassName('next-button');

let currentIndex = 0;
let intervalId = null;
let isPlaying = true;

// Function to show the current image
function showImage() {
    imageElement.src = baseURL + imagePaths[currentIndex];
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    showImage();
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    showImage();
}

// Function to start the automatic cycling
function startCarousel() {
    intervalId = setInterval(nextImage, 5000);
    isPlaying = true;
    playButton.disabled = true;
    pauseButton.disabled = false;
}

// Function to pause the automatic cycling
function pauseCarousel() {
    clearInterval(intervalId);
    isPlaying = false;
    playButton.disabled = false;
    pauseButton.disabled = true;
}

// Event listeners
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', prevImage);
document.getElementById('pause-button').addEventListener('click', pauseCarousel);
document.getElementById('play-button').addEventListener('click', startCarousel);

//prevButton.addEventListener('click', prevImage);
//nextButton.addEventListener('click', nextImage);
//playButton.addEventListener('click', startCarousel);
//pauseButton.addEventListener('click', pauseCarousel);

// Initialize the carousel
showImage();
startCarousel();

console.log("working");

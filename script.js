const slider = document.getElementById('slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function updateSliderPosition() {
    const width = slider.clientWidth / slider.children.length;
    slider.style.transform = `translateX(${-currentIndex * width}px)`;
}

function goToPrevSlide() {
    if (currentIndex === 0) {
        currentIndex = slider.children.length - 1;
    } else {
        currentIndex--;
    }
    updateSliderPosition();
}

function goToNextSlide() {
    if (currentIndex === slider.children.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSliderPosition();
}

prev.addEventListener('click', goToPrevSlide);
next.addEventListener('click', goToNextSlide);

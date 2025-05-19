const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const totalSlides = dots.length;
let currentIndex = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.slide);
    updateSlider();
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 4000);


const btn = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  btn.style.top = (100 + scrollY) + 'px';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const slides = document.querySelectorAll('.carousel-slide');
const container = document.querySelector('.carousel-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  if(index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

container.style.transform = `translateX(-${currentIndex * 100}%)`;
dots.forEach(dot => dot.classList.remove('active'));
dots[currentIndex].classList.add('active');
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => showSlide(idx));
});
setInterval(() => showSlide(currentIndex + 1), 5000);
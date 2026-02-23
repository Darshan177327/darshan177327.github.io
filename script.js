let slides = document.querySelectorAll(".slide");
let current = 0;

function updateSlides() {
slides.forEach(slide => slide.classList.remove("active"));
slides[current].classList.add("active");
}

function moveSlide(direction) {
current += direction;

if(current < 0){
current = slides.length - 1;
}
if(current >= slides.length){
current = 0;
}

updateSlides();
}

updateSlides();
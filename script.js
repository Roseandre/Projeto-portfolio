var slides = document.querySelectorAll('.slides img');
var currentSlide = 0;

function nextSlide() {
 
    slides[currentSlide].style.display = 'none';
    
    currentSlide = (currentSlide + 1) % slides.length;
   
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000);

let currentIndex = 0;

function showSlide(index) {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length - 1;

    if (index >= totalSlides) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = totalSlides - 1; 
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 320; 
    carouselWrapper.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);


// sticky javascript
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


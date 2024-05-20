let carousels = {
    'carousel1': 0,
    'carousel2': 0
};

function showSlide(carouselId, index) {
    const carouselWrapper = document.querySelector(`#${carouselId} .carousel-wrapper`);
    const slides = document.querySelectorAll(`#${carouselId} .card`);
    const totalSlides = 3;

    if (index >= totalSlides) {
        carousels[carouselId] = 0;
    } else if (index < 0) {
        carousels[carouselId] = totalSlides - 1;
    } else {
        carousels[carouselId] = index;
    }

    const offset = -carousels[carouselId] * 320; // Adjust according to card width + margin
    carouselWrapper.style.transform = `translateX(${offset}px)`;
}

function nextSlide(carouselId) {
    showSlide(carouselId, carousels[carouselId] + 1);
}

function prevSlide(carouselId) {
    showSlide(carouselId, carousels[carouselId] - 1);
}

Object.keys(carousels).forEach(carouselId => showSlide(carouselId, 0));



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


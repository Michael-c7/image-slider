let prevSlideBtn = document.querySelector(".prev-slide-btn");
let NextSlideBtn = document.querySelector(".next-slide-btn");
let slideItems = document.querySelector(".image-slider-items");


function slide() {
    let currentSlide = document.querySelector(".image-slider-item--current");
    let prevSlide = currentSlide.previousElementSibling;
    let nextSlide = currentSlide.nextElementSibling;
}

slide()



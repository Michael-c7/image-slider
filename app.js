let prevSlideBtn = document.querySelector(".prev-slide-btn");
let NextSlideBtn = document.querySelector(".next-slide-btn");
let slideItems = document.querySelector(".image-slider-items");

let containerInner = document.querySelector(".container__inner")
let imageContainer = document.querySelector(".images-container")
let dots = document.querySelector(".dots");

let counter = 0;





function slide(event) {
    let currentSlide = document.querySelector(".image-slider-item--current");
    let prevSlide = currentSlide.previousElementSibling;
    let nextSlide = currentSlide.nextElementSibling;
    let allSlideItems = Array.from(slideItems.children)

    /*btn*/
    let currentBtn = event.target.closest(".slide-btn");

    // let SlidesIndexesArr = allSlideItems.map((item, index) =>  index);
    // let slideIndexFirst = allSlideItems[0];
    // let slideIndexLast = parseInt(SlidesIndexesArr.slice(SlidesIndexesArr.length - 1));
    // let slideLastPositionNumber = Number(slideIndexLast + "00");

// next slide
    if(currentBtn.classList.contains("prev-slide-btn")) {
        console.log("the prev btn")

        /*counter*/
        counter-=100;
        // move slide
        imageContainer.style = `transform: translateX(${-counter}%)`;
        // remove all classes that indicate what the current slide is
        allSlideItems.forEach(element => {
            element.classList.remove("image-slider-item--current");
        });

        // add the current slide class to the prev(now current) slide
        prevSlide.classList.add("image-slider-item--current")

// prev slide
    } else if(currentBtn.classList.contains("next-slide-btn")) {
        console.log("the next btn")

        /*counter*/
        counter+=100;
        // move slide
        imageContainer.style = `transform: translateX(${-counter}%)`;
        // remove all classes that indicate what the current slide is
        allSlideItems.forEach(element => {
            element.classList.remove("image-slider-item--current");
        });
        // add the current slide class to the next(now current) slide
        nextSlide.classList.add("image-slider-item--current");
    }
}

containerInner.addEventListener("click", slide);





let dotsSlide = event => {
    let currentSlide = document.querySelector(".image-slider-item--current");
    let prevSlide = currentSlide.previousElementSibling;
    let nextSlide = currentSlide.nextElementSibling;
    let items = Array.from(slideItems.children);
    let dotItem = Array.from(dots.children);

    console.log(dotItem)

    if(event.target.classList.contains("dot")) {
        let currentIndex = 0;
    }
    console.log(counter)
}

dots.addEventListener("click", dotsSlide);
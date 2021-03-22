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
    let items = Array.from(slideItems.children)

    /*btn*/
    let currentBtn = event.target.closest(".slide-btn");

    /*Either create a counter,
    +1 for each nextbtn click and -1 for each prevBtn click,

    or count the current slide and use the index number from that.

    - first slide is at 0%,
      second slide is at 100%,
      3rd slide is at 200%, ect
    ----------
    // - when you move to the next slide / prev slide
    loop through each slide and remove .image-slider-item--current and
    then apply the .image-slider-item--current to the current item

    */

    if(currentBtn.classList.contains("prev-slide-btn")) {
        console.log("the prev btn")

        /*counter*/
        counter-=100;

        imageContainer.style = `transform: translateX(${-counter}%)`;

        items.forEach(element => {
            element.classList.remove("image-slider-item--current");
        });

        // prev
        prevSlide.classList.add("image-slider-item--current")


    } else if(currentBtn.classList.contains("next-slide-btn")) {
        console.log("the next btn")

        /*counter*/
        counter+=100;

        imageContainer.style = `transform: translateX(${-counter}%)`;

        items.forEach(element => {
            element.classList.remove("image-slider-item--current");
        });

        // next
        nextSlide.classList.add("image-slider-item--current")
    }

    console.log(counter)
}

containerInner.addEventListener("click", slide);


let dotsSlide = event => {
    // console.log(event.target)
    if(event.target.classList.contains("dot")) {
        // counter+=100;
        // console.log("hay")
    }
}

dots.addEventListener("click", dotsSlide)
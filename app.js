let prevSlideBtn = document.querySelector(".prev-slide-btn");
let NextSlideBtn = document.querySelector(".next-slide-btn");
let slideItems = document.querySelector(".image-slider-items");

let containerInner = document.querySelector(".container__inner")
let imageContainer = document.querySelector(".images-container")



function slide(event) {
    let currentSlide = document.querySelector(".image-slider-item--current");
    let prevSlide = currentSlide.previousElementSibling;
    let nextSlide = currentSlide.nextElementSibling;

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
        imageContainer.style =  `transform: translateX(${-0}%)`;
        console.log("the prev btn")

    } else if(currentBtn.classList.contains("next-slide-btn")) {
        console.log("the next btn")
        imageContainer.style =  `transform: translateX(${-100}%)`;
    }

    // console.log(currentBtn)
}

containerInner.addEventListener("click", slide);



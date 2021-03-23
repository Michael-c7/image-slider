let prevSlideBtn = document.querySelector(".prev-slide-btn");
let NextSlideBtn = document.querySelector(".next-slide-btn");
let slideItems = document.querySelector(".image-slider-items");
let slideItemArr = Array.from(document.querySelectorAll(".image-slider-item"));


let containerInner = document.querySelector(".container__inner")
let imageContainer = document.querySelector(".images-container")
let dots = document.querySelector(".dots");
let dotAllArr = Array.from(document.querySelectorAll(".dot"));




/*TODO
1. get the slides to move on click of prev / next btn

1.5. when you get to the end of the image go back to the end \ beginning

2. get the dots working
- move slides w/ what dot you click on
- active dot class changes to the current slide that your on

3. move dots w/ slides

4. place slide w/ javascript & not css
*/


function sliderFunctionality(event) {
    let currentSlide = document.querySelector(".image-slider-item--current");
    let prevSlide = currentSlide.previousElementSibling;
    let nextSlide = currentSlide.nextElementSibling;


}






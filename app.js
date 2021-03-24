/*TODO


1. get the dots working
- move slides w/ what dot you click on
    when you click on a dot (that not currently selected)
    1. you get the index of that dot
    2. you remove all the current--dot class from every dot
    3. you add the class current--dot to the dot you clicked on
    4. you set the index(global variable)
    equal to the index of the dot that you clicked on



2. place slide w/ javascript & not css
*/






let slides = document.querySelector(".image-slider-items").children;
let prevSlideBtn = document.querySelector(".prev-slide-btn");
let nextSlideBtn = document.querySelector(".next-slide-btn");
let slidesTotalAmt = slides.length;
let imageContainer = document.querySelector(".images-container");
/*dots get the parent item of all the dots*/
let dots = document.querySelector(".dots");
/*dotsAll gets all of the individual dots(put them in an array)*/
let dotsAll = Array.from(document.querySelector(".dots").children);





let index = 0;
prevSlideBtn.addEventListener("click", function() {
    sliderFunctionality("prev")
});

nextSlideBtn.addEventListener("click", function() {
    sliderFunctionality("next")
});


dots.addEventListener("click", dotsSliderFunc);

function dotsSliderFunc (event) {
    /*need the clicked index */
    for(let i = 0; i < dotsAll.length; i++) {
        console.log(dotsAll[i])
    }
    console.log(event.target)
}


let sliderFunctionality = slideDirection => {
    if(slideDirection === "next") {
        index++;
        if(index === slidesTotalAmt) {
           index = 0;
        }
    }
    else {
        if(index === 0) {
          index = slidesTotalAmt - 1;
        } else {
          index--;
        }
      }
        for(let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("image-slider-item--current")
            dotsAll[i].classList.remove("dot--current")
        }
        slides[index].classList.add("image-slider-item--current")
        dotsAll[index].classList.add("dot--current")
        imageContainer.style = `transform: translateX(${-Number(index +  "00")}%)`;
}
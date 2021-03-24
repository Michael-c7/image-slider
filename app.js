/*TODO
1. get the slides to move on click of prev / next btn

1.5. when you get to the end of the image go back to the end \ beginning

2. get the dots working
- move slides w/ what dot you click on
- active dot class changes to the current slide that your on

3. move dots w/ slides

4. place slide w/ javascript & not css
*/






let slides = document.querySelector(".image-slider-items").children;
let prevSlideBtn = document.querySelector(".prev-slide-btn");
let nextSlideBtn = document.querySelector(".next-slide-btn");
let slidesTotalAmt = slides.length;
let imageContainer = document.querySelector(".images-container");
/*dots*/
let dotsAll = document.querySelector(".dots").children;





let index = 0;
prevSlideBtn.addEventListener("click", function() {
    sliderFunctionality("prev")
    // console.log("hey in prev btn")
});

nextSlideBtn.addEventListener("click", function() {
    sliderFunctionality("next")
});




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


// console.log(-Number(index +  "00") )

/*
for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("image-slider-item--current")
        dotsAll[i].classList.remove("dot--current")
    }
    slides[index].classList.add("image-slider-item--current")
    dotsAll[index].classList.add("dot--current")
    imageContainer.style = `transform: translateX(${-Number(index +  "00")}%)`;
*/
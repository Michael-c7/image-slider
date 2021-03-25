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
    /*get index of the dot that you clicked on*/
    let currentDotIndex = 0;
    event.target.classList.add("dot--clicked");
    for(let i = 0; i < dotsAll.length; i++) {
        if(dotsAll[i].classList.contains("dot--clicked")) {
            currentDotIndex = i;
        }
    }
    // remove the dot--clicked class
    dotsAll.forEach(item => {
        item.classList.remove("dot--clicked");
    })
    /*updating index w/ the dots index that you clicked on*/
    index = currentDotIndex;

    /*updating slides & dots*/
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("image-slider-item--current")
        dotsAll[i].classList.remove("dot--current")
    }
    slides[index].classList.add("image-slider-item--current")
    dotsAll[index].classList.add("dot--current")

    /*updating the slides*/
    imageContainer.style = `transform: translateX(${-Number(index +  "00")}%)`;
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





let slidePlacement = _ => {
    for(let i = 0; i < slides.length; i++) {
        let num = Number( i + "00");
        slides[i].style = `transform: translateX(${num}%)`;
    }
}

slidePlacement()
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
// console.log(slides.length)




let index = 0;
prevSlideBtn.addEventListener("click", function() {
    sliderFunctionality("prev")
});

nextSlideBtn.addEventListener("click", function() {
    sliderFunctionality("next")
});


let sliderFunctionality = slideDirection => {
    console.log(index)

    if(slideDirection === "next") {
        index++;
        if(index === slidesTotalAmt) {
           index = 0;
           console.log(index)
        } else {
            // if(index === 0) {
            //     index = slidesTotalAmt - 1;
            // } else {
            //     index--;
            // }
        }

        for(let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("image-slider-item--current")
        }
        slides[index].classList.add("image-slider-item--current")
        imageContainer.style = `transform: translateX(${-Number(index +  "00")}%)`;
    }
}


console.log(-Number(index +  "00") )
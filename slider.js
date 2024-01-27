const firstSlide = document.getElementById("slide-0");
const secondSlide = document.getElementById("slide-1");
const thirdSlide = document.getElementById("slide-2");
const firstSlNavBtn = document.getElementById("radio-0");
const secondSlNavBtn = document.getElementById("radio-1");
const thirdSlNavBtn = document.getElementById("radio-2");

const slides = [firstSlide, secondSlide, thirdSlide];
const navBtns = [firstSlNavBtn, secondSlNavBtn, thirdSlNavBtn];

let currentSlide = firstSlide;
let currentSlideIndex = 0;
let intervalId;

startInterval();

function sliderNavigationHandler(e) {
    currentSlide.classList.toggle("slide-hide");

    switch(e.target.id){
        case "radio-0":
            firstSlide.classList.toggle("slide-hide");
            currentSlide = firstSlide;
            break;
        case "radio-1":
            secondSlide.classList.toggle("slide-hide");
            currentSlide = secondSlide;
            break;
        case "radio-2":
            thirdSlide.classList.toggle("slide-hide");
            currentSlide = thirdSlide;
            break;
    }

    restartInterval();
}

function sliderArrowsHandler(e) {
    const currentSlideId = +currentSlide.id.slice(-1);
    navBtns[currentSlideId].checked = false;
    currentSlideIndex = currentSlideId;
    currentSlide.classList.toggle("slide-hide");

    if(e.target.id === "arr-left") {
        currentSlideIndex -= 1;
        if(currentSlideIndex < 0){
            currentSlideIndex = 2;
        }
    }
    if(e.target.id == "arr-right") {
        currentSlideIndex += 1
        if(currentSlideIndex > 2) {
            currentSlideIndex = 0;
        }
    }
    currentSlide = slides[currentSlideIndex];
    slides[currentSlideIndex].classList.toggle("slide-hide");
    navBtns[currentSlideIndex].checked = true;
    restartInterval();
}

function startInterval() {
    intervalId = setInterval(() => {
        const currentSlideId = +currentSlide.id.slice(-1);
        navBtns[currentSlideId].checked = false;
        currentSlideIndex = currentSlideId;
        currentSlide.classList.toggle("slide-hide");

        currentSlideIndex += 1;

        if (currentSlideIndex > 2) {
            currentSlideIndex = 0;
        }

        currentSlide = slides[currentSlideIndex];
        slides[currentSlideIndex].classList.toggle("slide-hide");
        navBtns[currentSlideIndex].checked = true;
    }, 5000);
}

function stopInterval() {
    clearInterval(intervalId)
}

function restartInterval() {
    stopInterval();
    startInterval();
}

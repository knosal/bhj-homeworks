const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let slideIndex = 0;

showSlides(slideIndex);

function showSlides(slide) {
    if (slide >= sliderItems.length) {
        slideIndex = 0;
    } else if (slide < 0) {
        slideIndex = sliderItems.length - 1;
    }
    let i = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
    sliderItems[i].classList.remove('slider__item_active');
    sliderItems[slideIndex].classList.add('slider__item_active');
}

let nextSlide = () => {showSlides(slideIndex += 1);}
let prevSlide = () => {showSlides(slideIndex -= 1);}

arrowNext.onclick = () => {nextSlide();}
arrowPrev.onclick = () => {prevSlide();}

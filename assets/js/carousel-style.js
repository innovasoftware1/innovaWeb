const radios = document.querySelectorAll('.slider__nav');
let currentIndex = 0;

function nextSlide() {
    radios[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % radios.length;
    radios[currentIndex].checked = true;
}

setInterval(nextSlide, 4000);

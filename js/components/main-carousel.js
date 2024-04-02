const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 100;

buttonRight.addEventListener('click', function () {
    pixels = pixels + 100; 
    elements.style = `transform: translateX(${pixels}px)`;
})

buttonLeft.addEventListener('click', function () {
    pixels = pixels - 100; 
    elements.style = `transform: translateX (${pixels}px)`;
})
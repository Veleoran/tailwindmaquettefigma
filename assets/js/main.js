/* Accordéon */

let acc = document.querySelectorAll('.accordeon');
let pAcc = document.querySelectorAll('button + p');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', ()=>{
        pAcc[i].classList.toggle('hidden');
    })
}


/* Carousselle */

let btnPrev = document.querySelector('#btnPrev');
let btnNext = document.querySelector('#btnNext');
let delta = 0;
let counter = 0;
let step = 346;
let slider = document.querySelector('#slider');
let containerWidth = document.querySelector('#sliderContainer').offsetWidth;
let nbSlide = slider.children.length;
let divid = Math.round(containerWidth / step);
console.log(divid);

btnPrev.addEventListener('click', () => {
    if (counter > 0) {
        delta = delta + step;
        slider.style.transform = `translate(${delta}px, 0)`;
        counter--;
    }
});

btnNext.addEventListener('click', () => {
    if (counter < (nbSlide - (divid))) {
        delta = delta - step;
        slider.style.transform = `translate(${delta}px,0)`;
        counter++;
    }
});
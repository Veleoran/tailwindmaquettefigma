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
let step = 340;
let slider = document.querySelector('#slider');
let containerWidth = document.querySelector('.articles-ateliers-container').offsetWidth;
let nbSlide = slider.children.length;
let divid = Math.round(containerWidth / step);

if (!btnPrev || !btnNext) return;

btnPrev.addEventListener('click', (e) => {
    if (counter > 0) {
        delta = delta + step;
        slider.style.transform = `translate(${delta}px, 0)`;
        counter--;
    }
});

btnNext.addEventListener('click', (e) => {
    if (counter < (nbSlide - (divid + 4))) {
        delta = delta - step;
        slider.style.transform = `translate(${delta}px,0)`;
        counter++;
    }
});
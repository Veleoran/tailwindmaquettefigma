let acc = document.querySelectorAll('.accordeon');
let pAcc = document.querySelectorAll('button + p');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', ()=>{
        pAcc[i].classList.toggle('hidden');
    })
}
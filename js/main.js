'use strict';


let tabcontent = document.querySelectorAll('.tabcontent');

for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
}

tabcontent[0].style.display = 'block';

let tabheader = document.querySelectorAll('.tabheader__item');

for (let i = 0; i < tabheader.length; i++) {
    tabheader[i].addEventListener('click', () => {
        for (let x = 0; x < tabcontent.length; x++) {
            tabcontent[x].style.display = 'none'

            tabheader[x].classList.remove('tabheader__item_active')
        }
        tabheader[i].classList.add('tabheader__item_active')
        tabcontent[i].style.display = 'block'

    })
}

//======================================================================================================


let sliders = document.querySelectorAll('.offer__slide');

for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none'
}

sliders[0].style.display = 'block';


let snext = document.querySelector('.offer__slider-next');
let current = document.querySelector('#current');
let sprev = document.querySelector('.offer__slider-prev')
let c = 0;
let t = 1;

snext.addEventListener('click', () => {
    if (c < 3) {
        sliders[c].style.display = 'none';
        c++
        t++
        sliders[c].style.display = 'block';
        current.innerText = `0${t}`

    } else {
        sliders[c].style.display = 'none';
        c = 0
        t = 1
        sliders[c].style.display = 'block';
        current.innerText = `0${t}`

    }
})

sprev.addEventListener('click', () => {
    if (c > 0) {
        sliders[c].style.display = 'none';
        c--
        t--

        sliders[c].style.display = 'block';
        current.innerText = `0${t}`

    } else {
        sliders[c].style.display = 'none';
        c = 3
        t = 4
        sliders[c].style.display = 'block';
        current.innerText = `0${t}`
    }
})

//====================================================================================================

let btn = document.querySelectorAll('.btnAll');

let modal = document.querySelector('.modal');

let close = document.querySelector('.modal__close');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        modal.style.display = 'block'
    })

}
close.addEventListener('click', () => {
    modal.style.display = 'none'
});
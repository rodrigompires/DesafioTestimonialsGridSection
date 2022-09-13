'use strict'

VanillaTilt.init(document.querySelectorAll(".card"));



//_______________________________________________________________________________________________

// FUNÇÃO DE INICIALIZAÇÃO DA PSEUDO TELA DE PRELOADER

const $loader = document.querySelector('.preloader');

setTimeout ( function () {
    $loader.style.visibility = 'hidden';
    $loader.style.opacity = '0';
    $loader.style.zIndex = "-10"
    
},5000);



//_______________________________________________________________________________________________

// FUNÇÃO DOS BOTÕES DOS TEMAS


const $btns = document.querySelectorAll('.menu__item');
const $body = document.querySelector('body');

$btns.forEach(element => {
    element.addEventListener('click', (e) => {
        $body.className = element.getAttribute('data-id');

    })
});


'use strict'

const type = document.querySelector('.type');

var typed = new Typed(type, {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 300,
    backDelay: 1000,
    loop: true,
    showCursor: false,
    smartBackspace: false,
    fadeOut: false,
});

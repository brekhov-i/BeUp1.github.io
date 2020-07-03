'use strict'

const type = document.querySelector('.type');
const arrow = document.querySelector('.arrow');
const arrowFill = arrow.querySelector('.fill');

var typed = new Typed(type, {
    stringsElement: '#typed-strings',
    typeSpeed: 10,
    backSpeed: 10,
    startDelay: 300,
    backDelay: 2000,
    loop: true,
    showCursor: false,
    smartBackspace: false,
    fadeOut: false,
});
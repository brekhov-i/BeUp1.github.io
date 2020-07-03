'use strict'

const type = document.querySelector('.type');

var typed = new Typed(type, {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 300,
    backDelay: 2000,
    loop: true,
    showCursor: false,
    smartBackspace: true,
    fadeOut: false,
    onComplete: (self) => {
        //self.pause.status = true;
    }
});


var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset: 100,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});
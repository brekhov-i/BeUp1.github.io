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
    onComplete: function (self) {
        if (arrow.classList.contains('reset')) {
            arrow.classList.remove('reset')
        }
        self.pause.status = true;
        arrow.classList.add('animated')
        setTimeout(() => {
            self.pause.status = false;
            arrow.classList.remove('animated')
            arrow.classList.add('reset')
        }, 2000)
    },
});
function animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}
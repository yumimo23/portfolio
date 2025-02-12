const nav = document.querySelector('.nav');

// const headerBtn = document.getElementById('header__btn');
const headerBtn = document.getElementById('menu');
headerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navBtns = document.querySelectorAll('.nav__btn, .nav__item a');
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const navPage1 = document.querySelector('.nav-page1');
    const navPage2 = document.querySelector('.nav-page2');
    const menuLine1 = document.querySelector('.menu-line1');
    const menuLine2 = document.querySelector('.menu-line2');

    menu.addEventListener('click', () => {
        menu.classList.toggle('rotate');
        navPage1.classList.toggle('transform');
        navPage2.classList.toggle('transform');
        menuLine1.classList.toggle('rotate1');
        menuLine2.classList.toggle('rotate2');
    });
});
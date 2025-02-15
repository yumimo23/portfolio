const nav = document.querySelector('.nav');
const menu = document.getElementById('menu');
const menuLine1 = document.querySelector('.menu-line1');
const menuLine2 = document.querySelector('.menu-line2');
menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('rotate');
    menuLine1.classList.toggle('rotate1');
    menuLine2.classList.toggle('rotate2');
});

nav.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('rotate');
    menuLine1.classList.toggle('rotate1');
    menuLine2.classList.toggle('rotate2');
});

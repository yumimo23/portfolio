const nav = document.querySelector('.nav');

const headerBtn = document.getElementById('header__btn');
headerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navBtns = document.querySelectorAll('.nav__btn, .nav__item a');
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
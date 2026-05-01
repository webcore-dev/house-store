import './style.css'

let mobileMenu = document.querySelector('.open');
let mobileMenuButton = document.querySelector('#mobile-menu-button');
let mobileMenuButtonIcon = document.querySelector('#mobile-menu-button i');
let menuLinks = document.querySelector('.menu-links');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('opacity-100');
    mobileMenu.classList.toggle('z-100');
    menuLinks.classList.toggle('translate-y-0');
    const isOpen = mobileMenu.classList.contains('opacity-100');
    mobileMenuButtonIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});

// L'OMBRE DE L'HEADER

let header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    };
});

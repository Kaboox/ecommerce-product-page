import './_colors.scss';
import './style.scss';


const closeMenuBtn = document.querySelector('.close-menu')!;
const mobileMenu = document.querySelector('.mobile-menu')!;
const burgerBtn = document.querySelector('.burger')
const body = document.querySelector('body')!;

console.log(mobileMenu);
console.log(closeMenuBtn);

burgerBtn?.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active')
    body.style.overflow = 'hidden'
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active')
    body.style.overflow = 'auto'
})
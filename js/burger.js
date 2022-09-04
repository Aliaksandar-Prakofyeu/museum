const burger = document.querySelector('.burger')
const nav = document.querySelector('.h-nav')

burger.addEventListener("click", () => {
    burger.classList.toggle('clicked');
    nav.classList.toggle('nav-activated');
})
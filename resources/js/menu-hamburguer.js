const menu = document.querySelector('#menu-hamburguer');
const nav = document.querySelector('nav');
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-hamburguer')
    const nav = document.querySelector('.menu-navegacao')
    menu.onclick = (() => {
        nav.classList.toggle('active')
    })
})
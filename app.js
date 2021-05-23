// let helper = document.getElementById('helper')
// window.addEventListener('resize', () => {
//     helper.innerText= window.innerWidth
// })

const openBtn = document.querySelector('.menu-open')
const closeBtn = document.querySelector('.menu-close')
const menu = document.querySelector('.main-menu')
const overlay = document.querySelector('.overlay')

openBtn.addEventListener('click', () => {
    overlay.classList.add('open')
    menu.classList.add('open')
    closeBtn.classList.add('open')
    openBtn.classList.add('close')
})
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open')
    menu.classList.remove('open')
    closeBtn.classList.remove('open')
    openBtn.classList.remove('close')
})
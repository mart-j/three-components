
const menu =document.querySelector('.js-dots')
const dots = document.querySelectorAll('.js-dot')

menu.addEventListener('mouseover', ()=> {
    dots.forEach(dot => {
        dot.style.backgroundColor = '#5a5d66'
    })
})

menu.addEventListener('mouseleave', ()=> {
    dots.forEach(dot => {
        dot.style.backgroundColor = '#8E94A7'
    })
})
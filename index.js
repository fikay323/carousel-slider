let carousel = document.querySelector('.carousel')
let first = document.querySelectorAll('.first')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

first.forEach((slide, index)=> {
    slide.style.left = `${index * 100}%`
})
let counter = 0
next.addEventListener('click', ()=> {
    counter++
    carouse()
})
prev.addEventListener('click', ()=> {
    counter--
   carouse()
}) 

function carouse () {
    if(counter>  first.length-1) {
        counter = 0
    }
    else if (counter < 0) {
        counter = first.length-1
    }
    first.forEach((slide)=> {
        slide.style.transform = `translateX(-${counter * 100}%)`  
    })
}
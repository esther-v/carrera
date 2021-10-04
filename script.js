//cursor animation

// let mouseCursor = document.querySelector('.cursor');
// let navLinks = document.querySelectorAll('.nav-links a');
// let imgPres = document.querySelector('.front-cover img');

// window.addEventListener('mousemove', cursor);

// function cursor(e){
//     mouseCursor.style.top = e.pageY + 'px';
//     mouseCursor.style.left = e.pageX + 'px';
// }

// navLinks.forEach(link => {
//     link.addEventListener('mouseover', () => {
//         mouseCursor.classList.add('link-grow');
//     })
//     link.addEventListener('mouseleave', () => {
//         mouseCursor.classList.remove('link-grow');
//     })
// })

// imgPres.addEventListener('mouseover', () => {
//     mouseCursor.classList.add('border-white');
// })

// imgPres.addEventListener('mouseleave', () => {
//     mouseCursor.classList.remove('border-white');
// })


//slider

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('.right')
const prev = document.querySelector('.left')
const circles = document.querySelectorAll('.cercle')
let index = 0

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

function nextSlide(){
    if(index < 2) {
        slides[index].classList.remove('active');
        index++;
        slides[index].classList.add('active');
    } else if (index === 2) {
        slides[index].classList.remove('active');
        index = 0;
        slides[index].classList.add('active');
    }
    for (i=0; i < circles.length; i++){
        if(circles[i].getAttribute('data-clic') - 1 === index){
            circles[i].classList.add('active-cercle')
        } else{
            circles[i].classList.remove('active-cercle')
        }
    }
}

function prevSlide() {
    if(index > 0) {
        slides[index].classList.remove('active');
        index--;
        slides[index].classList.add('active');
    } else if (index === 0) {
        slides[index].classList.remove('active');
        index = 2;
        slides[index].classList.add('active');
    }
    for(i = 0; i < circles.length; i++){
        if(circles[i].getAttribute('data-clic') - 1 === index){
            circles[i].classList.add('active-cercle')
        } else{
            circles[i].classList.remove('active-cercle')
        }
    }
}

const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

burger.addEventListener('click', () =>{
    menu.classList.add('active');
});
closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');
});

const counter = document.querySelectorAll('.skills__ratings-counter')
    lines = document.querySelectorAll('.skills__ratings-line div')

counter.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
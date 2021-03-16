const close = document.querySelector('.close-hamburger');
const open = document.querySelector('.icon-hamburger');
const allNav = document.querySelector('.nav');
const body = document.querySelector('body');

close.style.display ='none';

open.addEventListener('click',function(e){
    console.log(e.target)
    allNav.style.transform ='translateX(50%) scale(1)';
    open.style.display='none';
    close.style.display='block'
})

close.addEventListener('click',function(e){
    allNav.style.transform ='translateX(50%) scale(0)';
    close.style.display='none';
    open.style.display='block'
})

body.addEventListener('click',function(e){
    if(e.target.classList.contains('target')){
        e.target.lastElementChild.firstElementChild.classList.toggle('appear');
        e.target.firstElementChild.classList.toggle('rotate');
        console.log(e.target.firstElementChild)
    }
})
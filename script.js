navbar=document.querySelector('.navbar');
navlist=document.querySelector('.left-nav');
rightnav=document.querySelector('.Right-nav');
burger=document.querySelector('.burger');


burger.addEventListener('click',()=>{
rightnav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav')
});
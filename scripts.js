//script file
var menuBtn=document.querySelector('menu-btn')

menuBtn.addEventListener('click', ToggleMenu);

function ToggleMenu(){
    menuBtn.classList.toggle('active');
}
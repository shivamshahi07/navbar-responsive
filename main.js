const menu=document.querySelector('#mobile-menu');
const menulinks =document.querySelector('.navbar-menu');
const mobilemenu=()=>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}
menu.addEventListener('click',mobilemenu)
let menu = document.querySelector('#menu-bar');
let nav_cont = document.querySelector('.nav_cont');
let search_btn = document.querySelector('.search_btn');
let search = document.querySelector('.search');
let time_btn = document.querySelector('.time_btn');
let bars = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-times');
let user_btn = document.querySelector('.user_btn');
let user = document.querySelector('.user');
let user_time = document.querySelector('.user_time_box');

menu.onclick = () => {
    menu.classList.toggle('time_btn');
    nav_cont.classList.toggle('active');
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
}

search_btn.onclick = () => {
    search_btn.classList.toggle('time_btn');
    search.classList.toggle('active');
}

time_btn.onclick = () => {
    search.classList.remove('active');
}

user_btn.onclick = () => {
    user.classList.toggle('active');
}

user_time.onclick = () => {
    user.classList.remove('active');
}


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
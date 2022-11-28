let body = document.querySelector("body");
let btn_nav = document.querySelector(".btn-nav");
let btn_img = document.querySelector(".menu-img");
let nav = document.querySelector("nav");
let mode = "close";
let hero_img = document.querySelector(".boxImage img");

hero_img.src = (document.body.offsetWidth <=420)?
                'assets/images/image-web-3-mobile.jpg':
                'assets/images/image-web-3-desktop.jpg';

btn_nav.addEventListener("click",e=>{
    nav.classList.toggle("toggle-nav");
btn_img.src = (btn_img.src == 'assets/images/icon-menu.svg')?
                              'assets/images/icon-menu-close.svg':
                              'assets/images/icon-menu.svg';
})

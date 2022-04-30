const onglet = document.getElementsByClassName("onglet");
const sousMenu = document.getElementsByClassName("sous-menu");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");


const sousMenu1 = sousMenu[0];
const sousMenu2 = sousMenu[1];
const onglet1 = onglet[0];
const onglet2 = onglet[1];



const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const lines = document.getElementsByClassName("line");

burger.addEventListener('click', event => {
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
});

const matchResult = window.matchMedia("(max-width:1040px)");

function isSmallScreen(){
    return window.matchMedia("(max-width:1000px)").matches;
}

if (isSmallScreen() === true){
    sousMenu1.classList.add("cacher");
    sousMenu2.classList.add("cacher");
    onglet1.addEventListener('click', event => {
        sousMenu1.classList.toggle("cacher");
        arrow1.classList.toggle("turn");
    });
    onglet2.addEventListener('click', event => {
        sousMenu2.classList.toggle("cacher");
        arrow2.classList.toggle("turn");
    }); 

} else {
    onglet1.addEventListener('click', event => {
        sousMenu1.classList.toggle("hidden");
        arrow1.classList.toggle("turn");
    });
    onglet2.addEventListener('click', event => {
        sousMenu2.classList.toggle("hidden");
        arrow2.classList.toggle("turn");
    });
}
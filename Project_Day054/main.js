const header = document.querySelector("header");
window.addEventListener("scroll",function (){
    header.classList.toggle("sticky",window.scrollY > 80);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
    navlist.classList.toggle("open");
};

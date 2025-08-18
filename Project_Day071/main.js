const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
let navlist = document.querySelector(".navlist");
let mnue = document.querySelector("#menu-icon");
mnue.onclick = () => {
  mnue.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  mnue.classList.remove("bx-x");
  navlist.classList.remove("open");
};
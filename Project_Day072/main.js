window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navlist = document.getElementById("navlist");

menuToggle.addEventListener("click", function () {
  navlist.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector("aside");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

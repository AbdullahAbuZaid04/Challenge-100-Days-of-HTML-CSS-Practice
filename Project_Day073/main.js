const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const btn = document.querySelector(".btn");

function setExpanded(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
}

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  setExpanded(open);
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") setExpanded(false);
});

const mq = window.matchMedia("(min-width: 992px)");
mq.addEventListener("change", (e) => setExpanded(false));

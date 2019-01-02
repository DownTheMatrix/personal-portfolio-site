const MENU = document.querySelector(".navbar__toggle");
const NAV = document.querySelector(".navbar");

function toggleMenu() {
    NAV.classList.toggle("active");
}

MENU.addEventListener("click", toggleMenu);
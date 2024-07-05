const overlay = document.querySelector(".overlay");
const menuButton = document.querySelector(".menu-img");
const mobileMenu = document.querySelector(".mobile-menu");
const menuButtonClose = document.querySelector(".menu-img-close");

function toggleMenu() {
  overlay.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
}

menuButton.addEventListener("click", toggleMenu);

menuButtonClose.addEventListener("click", toggleMenu);

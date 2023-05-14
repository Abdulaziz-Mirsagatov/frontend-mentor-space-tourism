// mobile-menu
const menuButton = document.querySelector(".menu-btn");
const menuCloseButton = document.querySelector(".menu-close-btn");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => navbar.classList.add("open"));
menuCloseButton.addEventListener("click", () => navbar.classList.remove("open"));
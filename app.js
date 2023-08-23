const navToggle = document.querySelector(".nav-list");
const menuIcon = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", function() {
    navToggle.classList.toggle('nav-list-show')
});
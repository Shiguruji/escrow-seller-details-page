const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const icon = document.getElementById("test");
const erase = document.getElementById("try");
const erase2 = document.getElementById("btn-cont")

menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  icon.classList.toggle("highlight");
  erase.classList.toggle("wipe");
  erase2.classList.toggle("wipe");
});


 
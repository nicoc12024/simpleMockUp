const burgerToggle = document.querySelector(".burger");
const links = document.querySelector(".links");

burgerToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  burgerToggle.classList.toggle("spin");
});

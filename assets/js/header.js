var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("scroll-nav", window.scrollY > 350);
});

  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".navlinks");

    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

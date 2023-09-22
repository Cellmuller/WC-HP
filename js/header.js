document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.add("open");
    menuToggle.style.display = "none";
    closeMenu.style.display = "block";
  });

  closeMenu.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.style.display = "block";
    closeMenu.style.display = "none";
  });
});

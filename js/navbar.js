document
  .querySelectorAll(".slideshow nav span.nav-close")
  .forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const navbar = document.querySelector(".header");
      navbar.classList.remove("hide-header"); // Ensure the class is removed
      navbar.style.opacity = "1";
      navbar.style.zIndex = "2000";
    });
  });

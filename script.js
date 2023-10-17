document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon"); // Select by class name
  const dropdownMenu = document.querySelector(".dropdown-menu"); // Select by class name

  menuIcon.addEventListener("click", function () {
    // Toggle the "active" class on the menu icon
    menuIcon.classList.toggle("active");

    // Toggle the display of the dropdown menu
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });
});

function toggleNavbar() {
  const navbar = document.querySelector(".navbar"); // Replace with the appropriate selector for your navbar
  const menuIcon = document.querySelector(".menu-icon"); // Replace with the appropriate selector for your menu icon
  const dropdownMenu = document.querySelector(".dropdown-menu"); // Replace with the appropriate selector for your dropdown menu

  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    navbar.style.display = "none";
    menuIcon.style.display = "block";
    dropdownMenu.style.display = "none";
  } else {
    navbar.style.display = "flex";
    menuIcon.style.display = "none";
    dropdownMenu.style.display = "none";
  }
}

function handleWindowResize() {
  toggleNavbar();
}

// Call the function when the page loads and when it's resized
window.addEventListener("load", toggleNavbar);
window.addEventListener("resize", handleWindowResize);

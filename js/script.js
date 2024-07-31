// transition navbar and header-span on load
window.onload = function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("showNav");

  const span = document.querySelector(".header-span");
  span.classList.add("showSpan");
};

// dropdown stuff
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarDropdown = document.querySelector(".navbar-dropdown");

navbarToggle.addEventListener("click", function () {
  navbarDropdown.classList.toggle("showDropdown");
});

// check if user clicks outside of the navbar
window.onclick = function (event) {
  if (!event.target.matches(".navbar-toggle-icon")) {
    navbarDropdown.classList.remove("showDropdown");
  }
};

// check if window width is greater than 768px to remove dropdown
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navbarDropdown.classList.remove("showDropdown");
  }
});

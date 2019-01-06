function init() {
  "use strict";
  // Navigation
  const MENU = document.querySelector(".navbar__toggle");
  const NAV = document.querySelector(".navbar");
  const NAV_LINKS = document.querySelectorAll(".navlist__link");

  /* Clicking on the toggle menu opens the navigation */
  MENU.addEventListener("click", function() {
    NAV.classList.toggle("active");
  });

  /* Close the navbar when the list item is clicked on */ {
    for (let i = 0; i < NAV_LINKS.length; i++) {
      NAV_LINKS[i].addEventListener("click", function() {
        NAV.classList.remove("active");
      });
    }
  }

  // Scrolling functionality
  const ARROW_TOP = document.querySelector(".arrow__icon");

  /* Clicking on the arrow icon scrolls back to the navbar */
  ARROW_TOP.addEventListener("click", function() {
    NAV.scrollIntoView({ behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", init);

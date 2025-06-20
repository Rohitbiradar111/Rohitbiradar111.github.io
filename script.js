// Navbar Links
const navlinks = document.querySelectorAll(".nav-link");

function switchSection(targetSection, clickedButton) {
  navlinks.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(targetSection).classList.add("active");
  clickedButton.classList.add("active");
}

navlinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    switchSection(event.currentTarget.dataset.target, event.currentTarget);
  });
});

// Mobile Menu Toggle
const mobileMenuOpen = document.getElementById("mobile-menu-open");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const navMenu = document.querySelector("nav");

mobileMenuOpen.addEventListener("click", () => {
  navMenu.style.display = "block";
  mobileMenuClose.style.display = "block";
  mobileMenuOpen.style.display = "none";
});

mobileMenuClose.addEventListener("click", () => {
  navMenu.style.display = "none";
  mobileMenuOpen.style.display = "block";
  mobileMenuClose.style.display = "none";
});

// Resume Button
const resumePDF =
  "https://drive.google.com/file/d/1Gg1jGsF6JcAufNnkdheSdniyaSjJtxfQ/view?usp=sharing";

document.querySelectorAll(".resume-btn").forEach((button) => {
  button.addEventListener("click", () => {
    window.open(resumePDF, "_blank");
  });
});

// Project Buttons
document.querySelectorAll(".project").forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonType = e.target.textContent.toLowerCase();
    const card = e.target.closest(".project");
    const demoUrl = card.getAttribute("data-demo");
    const codeUrl = card.getAttribute("data-code");
    if (buttonType === "live demo" && demoUrl) {
      window.open(demoUrl, "_blank");
    } else if (buttonType === "source code" && codeUrl) {
      window.open(codeUrl, "_blank");
    }
  });
});

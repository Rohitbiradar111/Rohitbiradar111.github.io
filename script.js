gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 767) {
    gsap.fromTo(
      "#name",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      "#occupation",
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );

    gsap.to(".resume-btn", {
      rotation: 360,
      duration: 5,
      ease: "elastic.out",
      delay: 1,
    });
  }

  const resumePDF =
    "https://drive.google.com/file/d/10sL74a-gw756oRjc1JHRJ94wg89GmXtg/view?usp=sharing";

  document.querySelectorAll(".resume-btn").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(resumePDF, "_blank");
    });
  });

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
});

window.addEventListener("load", () => {
  if (window.innerWidth > 767) {
    gsap.to("#about", {
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    gsap.fromTo(
      "#experience",
      { yPercent: -100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#experience",
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: "#education",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    const skillsGrid = document.querySelector(".skills-grid");
    if (skillsGrid) {
      const skillsWidth = skillsGrid.scrollWidth - window.innerWidth;
      gsap.to(skillsGrid, {
        x: -skillsWidth,
        ease: "none",
        scrollTrigger: {
          trigger: "#skills",
          start: "top top",
          end: `+=${skillsWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    const projectContainer = document.querySelector("#projectContainer");
    if (projectContainer) {
      const projectsWidth = projectContainer.scrollWidth - window.innerWidth;
      gsap.to(projectContainer, {
        x: -projectsWidth,
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          scrub: 1,
          pin: true,
          end: `+=${projectsWidth}`,
          anticipatePin: 1,
        },
      });
    }
  }
});

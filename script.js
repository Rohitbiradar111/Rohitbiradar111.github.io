gsap.registerPlugin(ScrollTrigger);

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

  gsap.to(document.querySelector(".skills-grid"), {
    x: () =>
      -(document.querySelector(".skills-grid").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#skills",
      start: "top top",
      end: () =>
        "+=" +
        (document.querySelector(".skills-grid").scrollWidth -
          window.innerWidth),
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  gsap.to("#projectContainer", {
    x: () =>
      -(
        document.querySelector("#projectContainer").scrollWidth -
        window.innerWidth
      ),
    ease: "none",
    scrollTrigger: {
      trigger: "#projects",
      scrub: 1,
      pin: true,
      end: () =>
        "+=" +
        (document.querySelector("#projectContainer").scrollWidth -
          window.innerWidth),
      anticipatePin: 1,
    },
  });
}

const resumePDF =
  "https://drive.google.com/file/d/1Gg1jGsF6JcAufNnkdheSdniyaSjJtxfQ/view?usp=sharing";

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

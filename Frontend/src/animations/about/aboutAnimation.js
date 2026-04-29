import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = (about) => {
  if (!about) return;

  const h1Element = about.querySelector("h1");
  const h2Element = about.querySelector(".about-animation-text span h2");
  const pElement = about.querySelector("p");
  const flowerElement = about.querySelector(".about-animate-flower");

  gsap.from(h1Element, {
    opacity: 0,
    duration: 1,
    y: 50,
  });

  gsap.from(pElement, {
    opacity: 0,
    duration: 1,
    y: 50,
  });

  const tl = gsap.timeline({
    repeat: -1,
  });

  tl.from(flowerElement, {
    rotate: 360,
    duration: 2,
    ease: "power2.inOut",
  })
    .to(flowerElement, {
      width: 750,
      duration: 2,
      ease: "power2.inOut",
    })
    .from(
      h2Element,
      {
        opacity: 0,
        duration: 2,
        scale: 0,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      },
      "<",
    )
    .to(
      flowerElement,
      {
        width: 140,
        duration: 2,
        ease: "power2.inOut",
      },
      "-=1.99",
    )
    .to(flowerElement, {
      rotate: 360,
      duration: 2,
      ease: "power2.inOut",
    });
};

export const aboutBioAnimation = (aboutBio) => {
  const pElement = aboutBio.querySelector("p");

  gsap.from(pElement, {
    scrollTrigger: {
      trigger: aboutBio,
      start: "top 60%",
    },
    opacity: 0,
    duration: 1,
    y: 50,
  });
};

export const aboutBioSocialLinkAnimation = (link) => {
  const link1Element = link.querySelector(".homebio-link1");
  const link2Element = link.querySelector(".homebio-link2");
  const link3Element = link.querySelector(".homebio-link3");
  const link4Element = link.querySelector(".homebio-link4");

  gsap.from(link1Element, {
    y: -50,
    duration: 2,
    repeat: -1,
    ease: "power3.out",
  });

  gsap.from(link2Element, {
    x: -50,
    duration: 2,
    repeat: -1,
    ease: "power3.out",
  });

  gsap.from(link3Element, {
    y: 50,
    duration: 2,
    repeat: -1,
    ease: "power3.out",
  });

  gsap.from(link4Element, {
    x: 50,
    duration: 2,
    repeat: -1,
    ease: "power3.out",
  });
};

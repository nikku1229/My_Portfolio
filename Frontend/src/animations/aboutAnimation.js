import gsap from "gsap";

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

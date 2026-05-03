import gsap from "gsap";

export const formAnimation = (form) => {
  const h3Element = form.querySelector("h3");
  const inputs = form.querySelectorAll(".input");

  gsap.from(h3Element, {
    y: -100,
    duration: 1,
    opacity: 0,
    ease: "bounce.out",
  });

  gsap.from(inputs, {
    y: 100,
    duration: 1,
    stagger: 0.1,
    zIndex: 1,
    ease: "power3.out",
  });
};

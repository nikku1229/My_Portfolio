import gsap from "gsap";

export const navAnimation = (nav) => {
  if (!nav) return;

  const tl = gsap.timeline({
    defaults: {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    },
  });

  const items = nav.querySelectorAll("li");

  tl.from(items, {
    stagger: 0.3,
  });
};

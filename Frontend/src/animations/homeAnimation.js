import gsap from "gsap";

export const heroAnimation = (heroBlock) => {
  if (!heroBlock) return;

  const tl = gsap.timeline({
    defaults: { opacity: 0, x: "250%", duration: 0.6, ease: "power3.out" },
  });

  const blocks = heroBlock.querySelectorAll(".hero-divs");

  tl.from(blocks, {
    stagger: {
      each: 0.02,
      from: "random",
    },
  }).from(
    heroBlock.querySelector(".div65"),
    {
      x: "80%",
    },
    "-=0.4",
  );
};

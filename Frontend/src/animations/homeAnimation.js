import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

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

export const heroNameAnimation = (nameAnimate) => {
  if (!nameAnimate) return;

  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 1.5,
    },
  });

  const i = nameAnimate.querySelectorAll(".I");

  tl.fromTo(
    nameAnimate.querySelector(".N"),
    {
      rotateX: 180,
      translateY: "60%",
    },
    {
      rotateX: 0,
      translateY: "0%",
    },
  )
    .to(
      nameAnimate.querySelector(".N"),
      {
        rotateY: 180,
        repeat: -1,
        yoyo: true,
        duration: 3,
      },
      "-=0.6",
    )
    .from(
      i,
      {
        opacity: 0,
        y: -200,
        stagger: 0.2,
      },
      "<",
    )
    .from(nameAnimate.querySelector(".T"), {
      
    });

  // const spanBlocks = nameAnimate.querySelectorAll("span");

  // tl.from(spanBlocks, {
  //   y: -100,
  //   stagger: 0.2,
  // });
};

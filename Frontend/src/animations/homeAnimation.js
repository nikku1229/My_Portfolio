import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = (heroBlock) => {
  if (!heroBlock) return;

  const tl = gsap.timeline({
    defaults: { opacity: 0, x: "250%", duration: 2, ease: "power3.out" },
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

export const firstNameAnimation = (nameAnimate) => {
  if (!nameAnimate) return;

  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 1.5,
    },
  });

  const i = nameAnimate.querySelectorAll(".I");
  if (!i) return;

  const sElement = nameAnimate.querySelector(".S");
  if (!sElement) return;

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
    .fromTo(
      sElement,
      {
        y: -300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "bounce.out",
      },
      "<",
    );

  const tElement = nameAnimate.querySelector(".T");
  if (!tElement) return;

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const finalLetter = "t";
  const finalIndex = letters.indexOf(finalLetter);

  const hElement = nameAnimate.querySelector(".H");
  if (!hElement) return;

  const tl2 = gsap.timeline();

  tl2
    .to(
      { index: 0 },
      {
        index: finalIndex,
        ease: "power1.inOut",
        duration: 1.5,
        onUpdate: function () {
          const currentIndex = Math.floor(this.targets()[0].index);
          tElement.innerText = letters[currentIndex];
        },
      },
    )
    .fromTo(
      hElement,
      { x: 300, y: 0, opacity: 0 },
      {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: "power2.out",
        onUpdate: function () {
          const progress = this.progress();

          const bounce =
            Math.abs(Math.sin(progress * Math.PI * 3)) * (1 - progress) * 50;

          gsap.set(hElement, {
            x: hElement.x,
            y: -bounce,
          });
        },
      },
      "-=0.1",
    );
};

export const lastNameAnimation = (nameAnimate) => {
  const hElement = nameAnimate.querySelector(".H");
  if (!hElement) return;

  const sElement = nameAnimate.querySelector(".S");
  if (!sElement) return;

  const aElement = nameAnimate.querySelectorAll(".A");
  if (!aElement) return;

  const rElement = nameAnimate.querySelector(".R");
  if (!rElement) return;

  const mElement = nameAnimate.querySelector(".M");
  if (!mElement) return;

  const tl = gsap.timeline();

  tl.fromTo(
    sElement,
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "bounce.out",
      delay: 1,
    },
  )
    .fromTo(
      aElement,
      { opacity: 0 },
      {
        y: -250,
        stagger: 0.6,
        duration: 1,
        ease: "elastic.in",
        opacity: 1,
      },
      "<",
    )
    .to(
      aElement,
      {
        y: 0,
        stagger: 0.6,
        duration: 1,
        ease: "elastic.out",
        opacity: 1,
      },
      "-=0.6",
    )
    .fromTo(
      hElement,
      { x: -300, y: 0, opacity: 0 },
      {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: "power2.out",
        onUpdate: function () {
          const progress = this.progress();

          const bounce =
            Math.abs(Math.sin(progress * Math.PI * 3)) * (1 - progress) * 50;

          gsap.set(hElement, {
            x: hElement.x,
            y: -bounce,
          });
        },
      },
      "<",
    )
    .from(
      rElement,
      {
        x: 150,
      },
      "-=0.3",
    )
    .from(mElement, {
      opacity: 0,
    })
    .to(mElement, {
      y: -50,
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
};

export const flowerAnimation = (flower) => {
  const clover = flower.querySelector(".clover");
  if (!clover) return;

  const flowerRound = flower.querySelector(".hero-shape-block");
  if (!flowerRound) return;

  const tl = gsap.timeline();

  tl.fromTo(
    clover,
    {
      x: 965,
      y: 430,
    },
    {
      y: 130,
      delay: 2,
      duration: 1,
      rotateZ: -360,
    },
  )
    .to(clover, {
      x: 1300,
      rotateZ: 180,
      duration: 1,
    })
    .to(clover, {
      opacity: 0,
      duration: 0.2,
    })
    .fromTo(
      flowerRound,
      {
        scale: 0,
        x: 1200,
        y: 50,
      },
      {
        scale: 1,
      },
    );
};

export const scrollFlowerAnimation = (flower) => {
  const flowerRound = flower.querySelector(".hero-shape-block");
  if (!flowerRound) return;

  gsap.to(flowerRound, {
    x: 700,
    rotateZ: -360,
    ease: "power2.out",
    scrollTrigger: {
      trigger: flowerRound,
      scroller: "body",
      start: "top 30%",
      end: "top 0%",
      scrub: 3,
    },
  });
};

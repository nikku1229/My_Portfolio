import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const scrollerAnimation = (animate) => {
  if (!animate) return;

  const h2s = animate.querySelectorAll(".h2");
  const spans = animate.querySelectorAll("h2 span");
  const tagBlock1 = animate.querySelector(".tag-block1");
  const tagBlock2 = animate.querySelector(".tag-block2");

  gsap.to(animate, {
    transform: "translateX(-120%)",
    scrollTrigger: {
      trigger: animate,
      start: "top 15%",
      end: "top -100%",
      pin: true,
      scrub: 2,
    },
  });

  gsap.from(tagBlock1, {
    y: -300,
    duration: 1.2,
    ease: "bounce.out",
    opacity: 0,
    scrollTrigger: {
      trigger: animate,
      start: "top 50%",
      end: "top 10%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(tagBlock2, {
    x: -300,
    y: -100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: animate,
      start: "top 50%",
      end: "top 10%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(spans, {
    y: -60,
    opacity: 0,
    ease: "back.out(1.7)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: spans,
      start: "top 45%",
      end: "top 30%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(h2s, {
    y: -60,
    opacity: 0,
    ease: "back.out(1.7)",
    stagger: 0.1, 
    scrollTrigger: {
      trigger: spans,
      start: "top 10%",
      end: "top -30%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });
};

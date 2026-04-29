import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollerAnimation = (animate) => {
  if (!animate) return;

  const scrollerContainer = animate.querySelector(".scroller-container");
  const h21 = animate.querySelector(".h21");
  const h22 = animate.querySelector(".h22");
  const h23 = animate.querySelector(".h23");
  const spans = animate.querySelectorAll("h2 span");
  const tagBlock1 = animate.querySelector(".tag-block1");
  const tagBlock2 = animate.querySelector(".tag-block2");
  const linkButton = animate.querySelector(".btn");

  gsap.to(scrollerContainer, {
    x: "-80%",
    ease: "none",
    scrollTrigger: {
      trigger: animate,
      start: "top 0%",
      end: "top -50%",
      scrub: 2,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  gsap.from(tagBlock1, {
    y: -300,
    duration: 1.2,
    ease: "bounce.out",
    opacity: 0,
    scrollTrigger: {
      trigger: animate,
      start: "top 30%",
      end: "top 0%",
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
      start: "top 30%",
      end: "top 0%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(spans, {
    y: -60,
    opacity: 0,
    ease: "back.out(1.7)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: animate,
      start: "top 20%",
      end: "top -20%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(h21, {
    y: -80,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: animate,
      start: "top 15%",
      end: "top -30%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(h22, {
    x: -1200,
    ease: "power1.out",
    opacity: 0,
    zIndex: "-1",
    scrollTrigger: {
      trigger: animate,
      start: "top 0%",
      end: "top -30%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(h23, {
    x: -1200,
    ease: "back.out(1.7)",
    scale: 1.5,
    opacity: 0,
    zIndex: "-1",
    scrollTrigger: {
      trigger: animate,
      start: "top 0%",
      end: "top -20%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(linkButton, {
    x: -1200,
    ease: "power1.out",
    opacity: 0,
    scale: 3,
    rotate: -90,
    scrollTrigger: {
      trigger: animate,
      start: "top 10%",
      end: "top -50%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });
};

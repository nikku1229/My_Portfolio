import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const tabAnimation = (tabRef) => {
  const tabs = tabRef.querySelectorAll(".t-animate");

  gsap.from(tabs, {
    opacity: 0,
    x: -100,
    duration: 0.7,
    stagger: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: tabRef,
      start: "top 80%",
    },
  });
};

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const bioAnimation = (bioText) => {
  if (!bioText) return;

  const spans = bioText.querySelectorAll("h3 > span");
  const highlights = bioText.querySelectorAll(".detail-highlight");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: bioText,
      start: "top 50%",
      end: "top 30%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.set(spans, { opacity: 0, y: 40, filter: "blur(4px)" });
  gsap.set(highlights, { color: "inherit" });

  tl.to(spans[0], {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out",
  })
    .to(
      spans[1],
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .to(
      spans[2],
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .to(
      highlights,
      {
        color: "",
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.3",
    );
};

export const bioBackAnimation = (bioBack) => {
  const semiCircle = bioBack.querySelector(".semicircle");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: semiCircle,
      start: "top 50%",
      end: "top 25%",
      scrub: 2,
    },
  });

  tl.fromTo(
    semiCircle,
    {
      x: "80%",
      y: "20%",
      scale: 2,
    },
    {
      scale: 0,
    },
  );
};

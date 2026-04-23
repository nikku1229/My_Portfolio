import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const experienceListAnimation = (list) => {
  if (!list) return;

  const listItems = list.querySelectorAll(".list");

  listItems.forEach((item) => {
    const imgElement = item.querySelectorAll("a img");
    const contentElement = item.querySelectorAll(".content-animate");

    gsap.from(imgElement, {
      scrollTrigger: {
        trigger: item,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.5,
      y: 50,
    });

    gsap.from(contentElement, {
      scrollTrigger: {
        trigger: item,
        start: "top 75%",
      },
      stagger: 0.15,
      opacity: 0,
      duration: 0.5,
      x: 150,
    });
  });
};

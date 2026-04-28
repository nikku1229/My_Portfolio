import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const catalogAnimation = (catalog) => {
  if (!catalog) return;

  const projects = catalog.querySelectorAll(".projects");

  projects.forEach((project) => {
    const projectName = project.querySelector(".project-name");
    const desc = project.querySelector(".desc");
    const h3Elements = project.querySelectorAll("h3");
    const fList = project.querySelectorAll(".f-l");

    gsap.from(projectName, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 50%",
      },
    });

    gsap.from(desc, {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 50%",
      },
    });

    gsap.from(h3Elements, {
      x: 50,
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: project,
        start: "top 50%",
      },
    });

    gsap.from(fList, {
      x: 50,
      duration: 0.4,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.5,
      scrollTrigger: {
        trigger: project,
        start: "top 50%",
      },
    });
  });
};

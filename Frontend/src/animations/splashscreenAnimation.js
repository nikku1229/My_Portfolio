import gsap from "gsap";

export const splashscreenAnimation = (screen) => {
  const v_left = screen.querySelectorAll(".v-left");
  const v_right = screen.querySelectorAll(".v-right");
  const h_top = screen.querySelectorAll(".h-top");
  const h_bottom = screen.querySelectorAll(".h-bottom");
  const loaderContent = screen.querySelector(".loader-content");

  const tl = gsap.timeline();

  tl.fromTo(
    v_left,
    {
      x: -300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.09,
      duration: 1,
      ease: "power4.out",
    },
  )
    .fromTo(
      v_right,
      {
        x: 300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.09,
        ease: "power4.out",
      },
      "<",
    )
    .fromTo(
      h_top,
      {
        y: -300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.09,
        ease: "power4.out",
      },
    )
    .fromTo(
      h_bottom,
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.09,
        ease: "power4.out",
      },
      "<",
    )
    .fromTo(
      loaderContent,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "expo.out",
      },
    );
};

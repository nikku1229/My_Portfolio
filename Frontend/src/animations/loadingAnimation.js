import gsap from "gsap";

export const loaderAnimation = (loader) => {
  const flower = loader.querySelector(".loader-flower");
  const petal_t_l = loader.querySelector(".loader-petal.t-l");
  const petal_t_r = loader.querySelector(".loader-petal.t-r");
  const petal_b_r = loader.querySelector(".loader-petal.b-r");
  const petal_b_l = loader.querySelector(".loader-petal.b-l");

  const tl = gsap.timeline({ repeat: -1 });

  tl.from(flower, {
    rotate: -180,
    ease: "circ.out",
    duration: 0.5,
  })
    .to(petal_t_l, {
      backgroundColor: "#ca6180",
      ease: "power3.out",
    })
    .to(petal_t_r, {
      backgroundColor: "#ca6180",
      ease: "power3.out",
    })
    .to(petal_b_r, {
      backgroundColor: "#ca6180",
      ease: "power3.out",
    })
    .to(petal_b_l, {
      backgroundColor: "#ca6180",
      ease: "power3.out",
    });
};

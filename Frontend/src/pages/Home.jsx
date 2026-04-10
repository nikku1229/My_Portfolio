import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Hero from "../components/Hero";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;

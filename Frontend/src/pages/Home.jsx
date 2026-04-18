import { useLayoutEffect, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useAnchor } from "../context/AnchorContext";
import { bioAnimation, bioBackAnimation } from "../animations/bioAnimation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollerSlider from "../components/ScrollerSlider";
import Thoughts from "../components/Thoughts";

const Home = () => {
  const bioRef = useRef();
  const bioBackRef = useRef();
  const location = useLocation();
  const { scrollToSection } = useAnchor();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      bioAnimation(bioRef.current);
      bioBackAnimation(bioBackRef.current);
    }, bioRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;

      setTimeout(() => {
        scrollToSection(section);
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <div className="seperator"></div>
      <div className="home-bio-container">
        <div className="bioAnimate-section" ref={bioBackRef}>
          <div className="semicircle">
            <div className="semi-half"></div>
            <div className="semi-half"></div>
          </div>
        </div>
        <div className="bio-header">
          <h2>#Bio</h2>
        </div>
        <div className="bio-details" ref={bioRef}>
          <h3>
            <span className="h3-f">
              <span className="detail-highlight">Full Stack Web Developer</span>{" "}
              specializing in the{" "}
              <span className="detail-highlight">
                MERN Stack and AI integration
              </span>
              , crafting scalable, high-performance web experiences that blend
              clean code with intelligent automation.
            </span>{" "}
            <span className="h3-s">
              Passionate about building end-to-end web solutions — from
              architecting solid backend APIs with{" "}
              <span className="detail-highlight">Node.js and Express.js</span>,
              to delivering sharp, responsive frontends with React.js
            </span>{" "}
            <span className="h3-t">
              — with a strong focus on real-world impact and seamless user
              experience.
            </span>
          </h3>
        </div>
      </div>
      <div className="seperator"></div>
      <ScrollerSlider />
      <Thoughts />
      <Footer />
    </>
  );
};

export default Home;

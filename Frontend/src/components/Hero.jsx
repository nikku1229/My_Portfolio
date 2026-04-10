import { useLayoutEffect, useRef } from "react";
import { heroNameAnimation } from "../animations/homeAnimation";
import gsap from "gsap";
import NameBlock from "./NameBlock";

function Hero() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      heroNameAnimation(firstNameRef.current);
      heroNameAnimation(lastNameRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="wide-width hero-container">
        <div className="hero-block">
          <div className="first-name">
            <h1 ref={firstNameRef}>
              <span className="N">N</span>
              <span className="I">i</span>
              <span className="T">t</span>
              <span className="I">i</span>
              <span>s</span>
              <span>h</span>
            </h1>
            <div className="hero-shape-block">
              <div className="hero-shape"></div>
              <div className="hero-shape-bullet"></div>
              <div className="clover">
                <span className="t_left"></span>
                <span className="t_right"></span>
                <span className="b_left"></span>
                <span className="b_right"></span>
              </div>
            </div>
          </div>
          <div className="last-name">
            <NameBlock />
            <h1 ref={lastNameRef}>
              <span className="S">S</span>
              <span>h</span>
              <span>a</span>
              <span>r</span>
              <span>m</span>
              <span>a</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

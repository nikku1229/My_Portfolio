import { useLayoutEffect, useRef } from "react";
import {
  firstNameAnimation,
  lastNameAnimation,
  flowerAnimation,
  scrollFlowerAnimation,
} from "../animations/homeAnimation";
import gsap from "gsap";
import NameBlock from "./NameBlock";

function Hero() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const flowerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      firstNameAnimation(firstNameRef.current);
      lastNameAnimation(lastNameRef.current);
      flowerAnimation(flowerRef.current);
      scrollFlowerAnimation(flowerRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="wide-width hero-container">
        <div className="hero-block">
          <div className="start-animate" ref={flowerRef}>
            <div className="clover">
              <span className="t_left"></span>
              <span className="t_right"></span>
              <span className="b_left"></span>
              <span className="b_right"></span>
            </div>

            <div className="hero-shape-block">
              <div className="hero-shape">
                <div className="bullet1"></div>
                <div className="bullet2"></div>
              </div>
            </div>
          </div>

          <div className="first-name">
            <h1 ref={firstNameRef}>
              <span className="N">N</span>
              <span className="I">i</span>
              <span className="T">t</span>
              <span className="I">i</span>
              <span className="S">s</span>
              <span className="H">h</span>
            </h1>
          </div>

          <div className="last-name">
            <NameBlock />
            <h1 ref={lastNameRef}>
              <span className="S">S</span>
              <span className="H">h</span>
              <span className="A">a</span>
              <span className="R">r</span>
              <span className="M">m</span>
              <span className="A">a</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

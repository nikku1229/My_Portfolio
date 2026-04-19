import { useEffect, useLayoutEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { aboutAnimation } from "../animations/aboutAnimation";
import gsap from "gsap";

function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      aboutAnimation(aboutRef.current);
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <div className="about-page-container">
        <div className="about-section" ref={aboutRef}>
          <span>
            <h1>About me</h1>
          </span>
          <div className="about-animation">
            <div className="about-animate-flower">
              <div className="flower-petal petal1"></div>
              <div className="flower-petal petal2"></div>
              <div className="flower-petal petal3"></div>
              <div className="flower-petal petal4"></div>
            </div>

            <div className="about-animation-text">
              <span>
                <h2>
                  Want to <br /> know something
                </h2>
              </span>
            </div>
          </div>
          <span>
            <p>#Let's Connect</p>
          </span>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

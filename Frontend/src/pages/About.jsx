import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Skills from "../components/Skills";
import {
  aboutAnimation,
  aboutBioAnimation,
} from "../animations/aboutAnimation";
import gsap from "gsap";

function About() {
  const aboutRef = useRef(null);
  const aboutBioRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      aboutAnimation(aboutRef.current);
      aboutBioAnimation(aboutBioRef.current);
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
      <div className="about-bio-container">
        <div className="about-bio" ref={aboutBioRef}>
          <h2>#About Me</h2>
          <span>
            <p>
              I'm Nitish Sharma, a passionate Full Stack Web Developer with 2+
              years of hands-on experience building modern, scalable web
              applications. I specialize in the MERN Stack — MongoDB,
              Express.js, React.js, and Node.js — and I thrive at the
              intersection of clean engineering and thoughtful user experience.{" "}
              <br />
              What sets me apart is my ability to integrate AI capabilities —
              including OpenAI and Google Gemini APIs — into real-world
              products, turning complex business problems into seamless,
              intelligent solutions. From architecting real-time data-sharing
              platforms to building AI-powered client management tools, I bring
              both technical depth and a product mindset to everything I build.{" "}
              <br />
              I've had the opportunity to work across freelance projects, a
              developer mentorship role, and a professional SaaS environment at
              Adaan Digital Solutions, where I lead frontend development sprints
              and deliver pixel-perfect, conversion-focused interfaces for
              clients worldwide. Beyond the code, I'm a problem-solver at heart
              — having competed in hackathons, mentored 50+ students in web
              development, and consistently sharpened my DSA skills on
              HackerRank and Codeforces. <br /> When I'm not building things,
              I'm exploring what's next in web technology — because in this
              field, curiosity is the best skill you can have.
            </p>
          </span>
          <Link to="mailto:niteshsharma5740@gmail.com">
            <button className="secondary-btn">
              Reach me
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <Skills />
      <Education />
      <Footer />
    </>
  );
}

export default About;

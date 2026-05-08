import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Experience1Logo from "../../assets/Logo/adaan-logo.png";
import Experience2Logo from "../../assets/Logo/upskillmafia-logo.png";
import Experience3Logo from "../../assets/Logo/Freelence-logo.svg";
import Experience4Logo from "../../assets/Logo/codesoft-logo.png";
import gsap from "gsap";
import { experienceListAnimation } from "../../animations/about/experienceAnimation";
import { useAnchor } from "../../context/AnchorContext";

function Experience() {
  const experiencesRef = useRef(null);
  const { experienceRef } = useAnchor();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      experienceListAnimation(experiencesRef.current);
    }, experiencesRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="experience-container" ref={experienceRef}>
        <div className="experience-section">
          <h2>#Experience</h2>

          <div className="experience-list" ref={experiencesRef}>
            <ul>
              <li className="list">
                <div className="experience-org-logo">
                  <Link to="https://www.adaan.com/" target="_blank">
                    <img src={Experience1Logo} alt="Adaan digital solutions" />
                  </Link>
                </div>

                <div className="experience-org-details">
                  <h3 className="content-animate">SaaS Web Developer</h3>
                  <strong className="content-animate">
                    Adaan Digital Solutions Private Limited
                  </strong>
                  <p className="content-animate">June 2025 - Mar 2026</p>
                  <ul>
                    <li className="content-animate">
                      Develop and maintain client websites on WordPress (Partner
                      Trinity) and Duda ecosystems, ensuring pixel-perfect UI
                      delivery.
                    </li>
                    <li className="content-animate">
                      Collaborate with design and marketing teams to build
                      conversion-optimized landing pages and SaaS dashboards.
                    </li>
                    <li className="content-animate">
                      Integrate third-party APIs and automation tools to
                      streamline client workflows.
                    </li>
                    <li className="content-animate">
                      Lead frontend development sprints and conduct code reviews
                      for team members.
                    </li>
                  </ul>
                </div>
              </li>

              <div className="seperator"></div>

              <li className="list">
                <div className="experience-org-logo">
                  <Link to="https://upskillmafia.com/" target="_blank">
                    <img src={Experience2Logo} alt="Upskill Mafia" />
                  </Link>
                </div>

                <div className="experience-org-details">
                  <h3 className="content-animate">Dev Representative</h3>
                  <strong className="content-animate">Upskill Mafia</strong>
                  <p className="content-animate">July 2024 - Jan 2025</p>
                  <ul>
                    <li className="content-animate">
                      Conducted technical workshops and coding sessions for 50+
                      students, mentoring them in React.js, JavaScript, and web
                      fundamentals.
                    </li>
                    <li className="content-animate">
                      Assisted in curriculum design for Full Stack Development
                      track.
                    </li>
                    <li className="content-animate">
                      Improved student project completion rate by providing
                      1-on-1 code reviews and debugging support.
                    </li>
                  </ul>
                </div>
              </li>

              <div className="seperator"></div>

              <li className="list">
                <div className="experience-org-logo">
                  <Link to="https://www.freelancer.com/" target="_blank">
                    <img src={Experience3Logo} alt="Freelencer" />
                  </Link>
                </div>

                <div className="experience-org-details">
                  <h3 className="content-animate">Web Developer & Designer</h3>
                  <strong className="content-animate">Freelance</strong>
                  <p className="content-animate">Sept 2024 - May 2025</p>
                  <ul>
                    <li className="content-animate">
                      Successfully delivered custom websites for 5–6 clients
                      across e-commerce, portfolio, and business domains.
                    </li>
                    <li className="content-animate">
                      Managed full project lifecycle — from requirement
                      gathering, Figma prototyping, development to deployment.
                    </li>
                    <li className="content-animate">
                      Built AI-powered features including chatbots and smart
                      form automation using OpenAI API for 2 client projects.
                    </li>
                  </ul>
                </div>
              </li>

              <div className="seperator"></div>

              <li className="list">
                <div className="experience-org-logo">
                  <Link to="https://www.codsoft.in/" target="_blank">
                    <img src={Experience4Logo} alt="CodeSoft" />
                  </Link>
                </div>

                <div className="experience-org-details">
                  <h3 className="content-animate">Summer Internship</h3>
                  <strong className="content-animate">Codesoft</strong>
                  <p className="content-animate">Mar 2024 - April 2024</p>
                  <ul>
                    <li className="content-animate">
                      Learn about team work and user interface designing.
                    </li>
                    <li className="content-animate">
                      Manage new design and ui ux of the clients and internal
                      projects of the company.
                    </li>
                    <li className="content-animate">
                      Complete 3 task with team work.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;

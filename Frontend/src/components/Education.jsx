import React, { useState, useLayoutEffect, useRef } from "react";
import { tabAnimation } from "../animations/educationAnimation";
import gsap from "gsap";

function Education() {
  const tabRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState("Graduation");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tabAnimation(tabRef.current);
    }, tabRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="education-container">
        <div className="education-section">
          <h2>#Education</h2>

          <div className="tab-section" ref={tabRef}>
            <div
              className={`tab ${selectedTab === "Secondary School" ? "active" : ""}`}
              onClick={() => setSelectedTab("Secondary School")}
            >
              <h3>Secondary School</h3>
            </div>

            <div
              className={`tab ${selectedTab === "Senior Secondary School" ? "active" : ""} t-animate`}
              onClick={() => setSelectedTab("Senior Secondary School")}
            >
              <h3>Senior Secondary School</h3>
            </div>

            <div
              className={`tab ${selectedTab === "Graduation" ? "active" : ""} t-animate`}
              onClick={() => setSelectedTab("Graduation")}
            >
              <h3>Graduation</h3>
            </div>
          </div>

          <div className="tab-content">
            {selectedTab === "Secondary School" && (
              <div className="education-details">
                <h3>Mathemathics</h3>
                <p className="education-year">2019 - 2020</p>
                <ul>
                  <li>
                    Completed secondary education at Sun Shine Public School,
                  </li>
                  <li>
                    Established a robust academic foundation with a strong
                    command of Mathematics and Science
                  </li>
                  <li>Achieved a score of 90%.</li>
                </ul>
              </div>
            )}

            {selectedTab === "Senior Secondary School" && (
              <div className="education-details">
                <h3>Non Medical</h3>
                <p className="education-year">2021 - 2022</p>
                <ul>
                  <li>
                    Completed Senior Secondary education at Govt. Boys Sr. Sec.
                    School, specializing in the Non-Medical stream.
                  </li>
                  <li>
                    Developed core analytical and logical reasoning capabilities
                  </li>
                  <li>Achieved a score of 80%.</li>
                </ul>
              </div>
            )}

            {selectedTab === "Graduation" && (
              <div className="education-details">
                <h3>Bachelor of Technology (B.Tech.)</h3>
                <p className="education-year">2022 - 2026</p>
                <ul>
                  <li>
                    Currently pursuing a B.Tech in Computer Science &
                    Engineering at the Satyug Darshan Institute of Engineering &
                    Technology.
                  </li>
                  <li>
                    my coursework focuses on essential technical domains,
                    including Data Structures & Algorithms, Database Management
                    Systems, Software Engineering, and Operating Systems
                  </li>
                  <li>Maintaining an academic record of 8.5 CGPA.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

import React, { useState } from "react";

function Education() {
  const [selectedTab, setSelectedTab] = useState("Graduation");

  return (
    <>
      <div className="education-container">
        <div className="education-section">
          <h2>#Education</h2>

          <div className="tab-section">
            <div
              className={`tab ${selectedTab === "Secondary School" ? "active" : ""}`}
              onClick={() => setSelectedTab("Secondary School")}
            >
              <h3>Secondary School</h3>
            </div>

            <div
              className={`tab ${selectedTab === "Senior Secondary School" ? "active" : ""}`}
              onClick={() => setSelectedTab("Senior Secondary School")}
            >
              <h3>Senior Secondary School</h3>
            </div>

            <div
              className={`tab ${selectedTab === "Graduation" ? "active" : ""}`}
              onClick={() => setSelectedTab("Graduation")}
            >
              <h3>Graduation</h3>
            </div>
          </div>

          <div className="tab-content">
            {selectedTab === "Secondary School" && (
              <div>
                <h4>Secondary School</h4>
                <p>Details about secondary school education.</p>
              </div>
            )}
            {selectedTab === "Senior Secondary School" && (
              <div>
                <h4>Senior Secondary School</h4>
                <p>Details about senior secondary school education.</p>
              </div>
            )}
            {selectedTab === "Graduation" && (
              <div>
                <h4>Graduation</h4>
                <p>Details about graduation education.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

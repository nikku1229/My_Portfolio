import React from "react";
import Logo from "../assets/Logo/Favicon.png";

function MobileView() {
  return (
    <>
      <div className="mobile-view-container">
        <div className="mobile-view-section">
          <img src={Logo} alt="Nitish Sharma" />
          <h1>View On Desktop</h1>
          <p>This portfolio is optimized for desktop experience only.</p>
        </div>
      </div>
    </>
  );
}

export default MobileView;

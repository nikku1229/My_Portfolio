import { useState } from "react";

function ContactHero() {
  const [reason, setReason] = useState("general");

  const renderForm = () => {
    switch (reason) {
      case "project":
        return (
          <div className="form-section">
            <h3>Project Details</h3>
            <input type="text" placeholder="Project Name" />
            <textarea placeholder="Project Description"></textarea>
            <input type="number" placeholder="Budget" />
          </div>
        );

      case "job":
        return (
          <div className="form-section">
            <h3>Job Opportunity</h3>
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Job Role" />
          </div>
        );

      case "general":
        return (
          <div className="form-section">
            <h3>General Inquiry</h3>
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
          </div>
        );

      case "freelance":
        return (
          <div className="form-section">
            <h3>General Inquiry</h3>
            <input type="text" placeholder="Name of Company" />
            <input type="number" placeholder="Budget" />
            <input type="text" placeholder="Enter your email" />
            <textarea placeholder="Fill the full details"></textarea>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="contact-page-container">
        <div className="contact-hero-section">
          <div className="reason-section">
            <label>Reason of Contact</label>
            <select value={reason} onChange={(e) => setReason(e.target.value)}>
              <option value="general">General Inquiry</option>
              <option value="project">Project Work</option>
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelance Projects</option>
            </select>
          </div>
        </div>
        <div className="contact-from-section">
          <form>
            {renderForm()}

            <button type="submit" className="secondary-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactHero;

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAnchor } from "../context/AnchorContext";

function Footer() {
  const { scrollToSection } = useAnchor();
  const navigate = useNavigate();
  const location = useLocation();

  const [message, setMessage] = useState("");

  const handleMessageSubmission = (e) => {
    e.preventDefault();

    alert("message send successful");
    setMessage("");
  };

  const handleQuotesClick = () => {
    if (location.pathname === "/") {
      scrollToSection("quotes");
    } else {
      navigate("/", { state: { scrollTo: "quotes" } });
    }
  };

  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-form">
            <h2>Feel Free to contact</h2>
            <form onSubmit={handleMessageSubmission}>
              <input
                type="text"
                name="message"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 24 15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="footer-nav-links">
            <h3>Reach Now</h3>
            <ul>
              <li>
                <Link className="link1" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link2" to="/contact-me">
                  Contact me
                </Link>
              </li>
              <li>
                <Link className="link3" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link4" to="/about#skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="link5" to="/about#experience">
                  Experience
                </Link>
              </li>
              <li>
                <Link className="link6" to="/about#education">
                  Education
                </Link>
              </li>
              <li>
                <div className="link7" onClick={handleQuotesClick}>
                  Quotes
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-social-links">
            <h3>Social Media Details</h3>
            <ul>
              <li>
                <Link
                  className="link1"
                  to="https://www.linkedin.com/in/nitish-sharma-648a581b2/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  className="link2"
                  to="https://www.instagram.com/nitish.error_29/"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="link3"
                  to="https://wa.me/+919953717840"
                  target="_blank"
                >
                  Whatsapp
                </Link>
              </li>
              <li>
                <Link
                  className="link4"
                  to="https://github.com/nikku1229"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className="link5"
                  to="https://www.hackerrank.com/profile/little_nitesh_29"
                  target="_blank"
                >
                  HackerRank
                </Link>
              </li>
              <li>
                <Link
                  className="link6"
                  to="https://leetcode.com/u/niteshsharma5740/"
                  target="_blank"
                >
                  LeetCode
                </Link>
              </li>
              <li>
                <Link
                  className="link7"
                  to="https://codeforces.com/profile/little_nitesh_29"
                  target="_blank"
                >
                  CodeForce
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copywrite-section">
          <p>&copy; 2026 Nitish Sharma - Portfolio. All Right Reserved</p>
          <p>
            <Link to="/privacy-policy" target="_blank">
              Privacy policy
            </Link>
            <Link to="/term-contact" target="_blank">
              Term of contact
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAnchor } from "../context/AnchorContext";
import { getLike, addLike } from "../service/likeApi";

function Footer() {
  const { scrollToSection } = useAnchor();
  const navigate = useNavigate();
  const location = useLocation();

  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleMessageSubmission = (e) => {
    e.preventDefault();

    alert("message send successful");
    setMessage("");
  };

  const handleAnchorClick = (targetPath, section) => {
    if (location.pathname === targetPath) {
      scrollToSection(section);
    } else {
      navigate(targetPath, { state: { scrollTo: section } });
    }
  };

  const handleLikes = async () => {
    try {
      if (liked) return;

      const data = await addLike();
      setLikes(data.totalLikes);
      setLiked(true);
      localStorage.setItem("liked", "true");
    } catch {
      console.error("Network error");
    }
  };

  useEffect(() => {
    const getLikes = async () => {
      const data = await getLike();
      setLikes(data.totalLikes);

      if (localStorage.getItem("liked")) {
        setLiked(true);
      }
    };

    getLikes();
  }, []);

  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-form">
            <h2>Feel Free to contact</h2>
            <form onSubmit={handleMessageSubmission}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Id"
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
                <span
                  className="link4"
                  onClick={() => handleAnchorClick("/about", "skills")}
                >
                  Skills
                </span>
              </li>
              <li>
                <span
                  className="link5"
                  onClick={() => handleAnchorClick("/about", "experience")}
                >
                  Experience
                </span>
              </li>
              <li>
                <span
                  className="link6"
                  onClick={() => handleAnchorClick("/about", "education")}
                >
                  Education
                </span>
              </li>
              <li>
                <span
                  className="link7"
                  onClick={() => handleAnchorClick("/", "quotes")}
                >
                  Github Stats
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-social-links">
            <h3>Social Media</h3>
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
          <p>&copy; 2026 Nitish Sharma - Portfolio. All Right Reserved.</p>
          <div className="public-likes">
            <p>Total likes {likes}</p>
            {!liked ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                onClick={handleLikes}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white liked"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import { useLayoutEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navAnimation } from "../animations/headerAnimation";
import gsap from "gsap";
import Logo from "../assets/Img/Favicon.png";
import Resume from "../assets/pdf/NitishSharmaResume.pdf";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const navContainer = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      navAnimation(navContainer.current);
    }, navContainer);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="top-cta">
          <svg
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
            />
          </svg>
          <p>
            The Source Code is{" "}
            <Link
              to="https://github.com/nikku1229/My_Portfolio"
              target="_blank"
            >
              Free for everyone
            </Link>
          </p>
        </div>

        <div className="nav wide-width">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={Logo} alt="Logo" />
          </div>

          <nav>
            <ul ref={navContainer}>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about/*" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={
                    location.pathname === "/projects/*" ? "active" : ""
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact-me"
                  className={
                    location.pathname === "/contact-me/*" ? "active" : ""
                  }
                >
                  Contact me
                </Link>
              </li>
            </ul>
            <Link to={Resume} target="_blank">
              <button className="primary-btn btn">Resume</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

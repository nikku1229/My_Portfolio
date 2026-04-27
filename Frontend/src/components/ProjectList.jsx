import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { catalogAnimation } from "../animations/projectListCatalog";

function ProjectList() {
  const catalogRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      catalogAnimation(catalogRef.current);
    }, catalogRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="project-list-container">
        <div className="project-list-section" ref={catalogRef}>
          <div className="projects">
            <div className="project-details">
              <h2 className="project-name">GeoConnect</h2>
              <p className="desc">
                A real-time location sharing & communication platform where
                users can create/join rooms, track live locations on a map, and
                chat with members — all in one place.
              </p>
              <span className="project-external-link">
                <span>
                  <Link
                    to="https://github.com/nikku1229/GeoConnect"
                    target="_blank"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </span>
                <span>
                  <div className="live-indicator"></div>
                  <Link
                    to="https://geoconnect-prototype.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </Link>
                </span>
              </span>

              <ul className="project-features">
                <h3>Feature</h3>
                <li>Create private rooms with password protection</li>
                <li>Live user location updates using Geolocation API</li>
                <li>Interactive map with markers</li>
                <li>Online/offline user status</li>
                <li>Distance calculation between users</li>
              </ul>

              <div className="project-tech-stacks">
                <ul>
                  <h4>Frontend</h4>
                  <li>
                    <span>
                      <p>React</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Leaflet(Map)</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Socket.io Client</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Axios</p>
                    </span>
                  </li>
                </ul>
                <ul>
                  <h4>Backend</h4>

                  <li>
                    <span>
                      <p>Express</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>JWT Authentication</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>SendGrid</p>
                    </span>
                  </li>
                </ul>
                <ul>
                  <h4>Database</h4>
                  <li>
                    <span>
                      <p>MongoDB </p>
                    </span>
                  </li>
                </ul>
                <ul>
                  <h4>Deployment</h4>
                  <li>
                    <span>
                      <p>Vercel</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Render</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Thunder Client</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>MongoDB Atlas</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="projects">
            <div className="project-details">
              <h2>ShareA</h2>
            </div>
          </div>
          <div className="projects">
            <div className="project-details">
              <h2>PrivyNote</h2>
            </div>
          </div>
          <div className="projects">
            <div className="project-details">
              <h2>DareBuddy</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;

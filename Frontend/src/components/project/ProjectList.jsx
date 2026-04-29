import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { catalogAnimation } from "../../animations/project/projectListCatalog";

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
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="live-links-indicator">
                  <div className="live-indicator"></div>
                  <Link
                    to="https://geoconnect-prototype.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </Link>
                </span>
              </span>

              <p className="desc">
                A real-time location sharing & communication platform where
                users can create/join rooms, track live locations on a map, and
                chat with members — all in one place.
              </p>

              <ul className="project-features">
                <h3>Feature</h3>
                <li className="f-l">
                  Create private rooms with password protection.
                </li>
                <li className="f-l">
                  Live user location updates using Geolocation API.
                </li>
                <li className="f-l">Interactive map with markers.</li>
                <li className="f-l">Online/offline user status.</li>
                <li className="f-l">Distance calculation between users.</li>
              </ul>

              <div className="project-tech-stacks">
                <h3>Tech Stacks</h3>
                <span>
                  <h4>Frontend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>React</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Leaflet(Map)</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Socket.io Client</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Axios</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Backend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Express</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>JWT Authentication</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>SendGrid</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Database</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>MongoDB </p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Deployment</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Vercel</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Render</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Thunder Client</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>MongoDB Atlas</p>
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div className="projects">
            <div className="project-details">
              <h2 className="project-name">ShareA</h2>

              <span className="project-external-link">
                <span>
                  <Link
                    to="https://github.com/nikku1229/ShareA"
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
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="live-links-indicator">
                  <div className="live-indicator"></div>
                  <Link
                    to="https://share-a-prototype.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </Link>
                </span>
              </span>

              <p className="desc">
                ShareA is a realtime file and chat sharing application built
                using React + Socket.IO + Node.js. ShareA is a fast, secure,
                real-time file sharing platform. It supports live file transfer,
                instant messaging, room-based sharing, and a sleek modern UI.
                Users can create rooms, share files, send messages, and
                collaborate instantly.
              </p>

              <ul className="project-features">
                <h3>Feature</h3>
                <li className="f-l">
                  Create and join rooms using secure room codes.
                </li>
                <li className="f-l">Password protected rooms.</li>
                <li className="f-l">
                  Real-time file transfer (P2P-like behavior).
                </li>
                <li className="f-l">File sharing with progress indicators.</li>
                <li className="f-l">Files stored temporarily for download.</li>
                <li className="f-l">
                  System notifications when users join/leave.
                </li>
              </ul>

              <div className="project-tech-stacks">
                <h3>Tech Stacks</h3>
                <span>
                  <h4>Frontend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>React</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Socket.io Client</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Axios</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Backend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Node</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Express</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Database</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>LocalStorage</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Deployment</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Vercel</p>
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div className="projects">
            <div className="project-details">
              <h2 className="project-name">PrivyNote</h2>

              <span className="project-external-link">
                <span>
                  <Link
                    to="https://github.com/nikku1229/privyNote"
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
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="live-links-indicator">
                  <div className="live-indicator"></div>
                  <Link to="https://privy-note.vercel.app/" target="_blank">
                    Live
                  </Link>
                </span>
              </span>

              <p className="desc">
                PrivyNote is a modern, full-stack, secure personal diary
                application that allows users to write, edit, delete, and manage
                private diary entries online. Each user has a completely private
                space secured with JWT authentication and password encryption.
              </p>

              <ul className="project-features">
                <h3>Feature</h3>
                <li className="f-l">Register and log in securely.</li>
                <li className="f-l">
                  Create, edit, delete, and manage diary entries.
                </li>
                <li className="f-l">Auto-save notes while typing.</li>
                <li className="f-l">Search through personal entries.</li>
                <li className="f-l">Reset forgotten passwords via email.</li>
                <li className="f-l">Access their diary from any device.</li>
              </ul>

              <div className="project-tech-stacks">
                <h3>Tech Stacks</h3>
                <span>
                  <h4>Frontend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>React</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Axios</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Backend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Node</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Express</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Authentication</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>JWT (JSON Web Token)</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>bcrypt (Password Hashing)</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Database</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>MongoDB</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>SendGrid</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Deployment</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Vercel</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Render</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Github</p>
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div className="projects">
            <div className="project-details">
              <h2 className="project-name">DareBuddy</h2>

              <span className="project-external-link">
                <span>
                  <Link
                    to="https://github.com/nikku1229/DareBuddy"
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
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="live-links-indicator">
                  <div className="live-indicator"></div>
                  <Link to="https://dare-buddy.vercel.app/" target="_blank">
                    Live
                  </Link>
                </span>
              </span>

              <p className="desc">
                A fun and interactive multiplayer Dare Game built using the MERN
                Stack. Play with friends, roll dice, and complete exciting dares
                based on categories and game types.
              </p>

              <ul className="project-features">
                <h3>Feature</h3>
                <li className="f-l">Dice rolling system (1–100).</li>
                <li className="f-l">Multiplayer support.</li>
                <li className="f-l">Dynamic dare generation from database.</li>
                <li className="f-l">Category-based dare selection.</li>
                <li className="f-l">Multiple game types (customizable).</li>
                <li className="f-l">Smooth animations and transitions.</li>
                <li className="f-l">Rate limiting & backend security.</li>
              </ul>

              <div className="project-tech-stacks">
                <h3>Tech Stacks</h3>
                <span>
                  <h4>Frontend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>React</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Axios</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Context API (State Management)</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Backend</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Node</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Express</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Authorization</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Database</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>MongoDB</p>
                      </span>
                    </li>
                  </ul>
                </span>
                <span>
                  <h4>Deployment</h4>
                  <ul>
                    <li className="f-l">
                      <span>
                        <p>Vercel</p>
                      </span>
                    </li>
                    <li className="f-l">
                      <span>
                        <p>Render</p>
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;

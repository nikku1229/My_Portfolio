import React from "react";
import { Link, useNavigate } from "react-router-dom";

function OtherProjects({ projects = [] }) {
  const navigate = useNavigate();

  const otherProject = projects.filter((p) => !p.featured);

  return (
    <>
      <div className="other-project-list">
        {otherProject.length !== 0 ? (
          otherProject.map((project, index) => (
            <div
              className="other-projects"
              key={project._id}
              onClick={() => {
                navigate(`/project/${project._id}`, {
                  state: { project },
                });
              }}
            >
              <h3>{project.projectName}</h3>
            </div>
          ))
        ) : (
          <>
            <div className="other-project-empty-block">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>

              <h4>Projects coming soon</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OtherProjects;

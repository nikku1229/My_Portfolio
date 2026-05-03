import React from "react";
import { Link, useNavigate } from "react-router-dom";

function OtherProjects({ projects = [] }) {
  const navigate = useNavigate();

  const otherProject = projects.filter((p) => !p.featured);

  return (
    <>
      <div className="other-project-list">
        {otherProject &&
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
          ))}
      </div>
    </>
  );
}

export default OtherProjects;

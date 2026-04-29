import React from "react";

function OtherProjects({ projects = [] }) {
  const otherProject = projects.filter((p) => !p.featured);

  return (
    <>
      <div className="other-project-list">
        {otherProject &&
          otherProject.map((project, index) => (
            <div className="other-projects" key={project._id}>
              <h3>{project.projectName}</h3>
            </div>
          ))}

        {/* <div className="other-projects">
          <h3>ProjectFlow</h3>
        </div>
        <div className="other-projects">
          <h3>Placement-Cell</h3>
        </div>
        <div className="other-projects">
          <h3>Local Ai Assistant</h3>
        </div>
        <div className="other-projects">
          <h3>Chess</h3>
        </div>
        <div className="other-projects">
          <h3>To Do List</h3>
        </div>
        <div className="other-projects">
          <h3>E-Commerce website Ui</h3>
        </div>
        <div className="other-projects">
          <h3>Book Store</h3>
        </div>
        <div className="other-projects">
          <h3>Weather App</h3>
        </div>
        <div className="other-projects">
          <h3>Dictionary</h3>
        </div>
        <div className="other-projects">
          <h3>Calculator</h3>
        </div> */}
      </div>
    </>
  );
}

export default OtherProjects;

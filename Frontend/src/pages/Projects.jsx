import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectHero from "../components/project/ProjectHero";
import ProjectList from "../components/project/ProjectList";
import OtherProjects from "../components/project/OtherProjects";

function Projects() {
  return (
    <>
      <Header />
      <div className="project-hero-container">
        <div className="project-hero-section">
          <ProjectHero />
          <div className="project-hero-details">
            <h1>Projects</h1>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
          </div>
        </div>
        <ProjectList />
      </div>
      <div className="other-projects-container">
        <div className="other-projects-category-section">
          <h2>#Other Projects</h2>
          <OtherProjects />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;

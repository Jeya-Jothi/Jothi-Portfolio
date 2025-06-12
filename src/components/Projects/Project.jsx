import { useState } from "react";
import "./Project.css";
import projectData from "../../data/projectData.js";
function Project() {
  const [showAll, setShowAll] = useState(false);
  const projectToShow = showAll ? projectData : projectData.slice(0, 3);
  return (
    <div className="projects-div" id="projects">
      <div className="projects-head">
        <p>Projects</p>
      </div>
      <div className="projects-content">
        {projectToShow.map((project, index) => {
          return (
            <div
              className={`project-card-div ${index % 2 !== 0 ? "reverse" : ""}`}
              key={project.id}
            >
              <div className="project-img-div">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="project-img"
                />
              </div>
              <div className="project-card-content">
                <p className="num-txt">{project.id}</p>
                <p className="project-name">{project.name}</p>
                <p className="project-describe">{project.description}</p>
                <a
                  href={project.liveUrl}
                  target="blank"
                  className="live-btn"
                  title="See the live website"
                >
                  <img
                    src="images/live icon.svg"
                    alt="live icon"
                    className="live-img"
                  />
                  Live
                </a>
              </div>
            </div>
          );
        })}
        <div className="v-m-btn-div">
          {projectData.length > 3 && (
            <button
              className="view-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More Projects"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;

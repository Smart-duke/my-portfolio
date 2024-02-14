import "./ProjectCard.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

const Project = () => {
  return (
    <div className="work">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, i) => {
          return (
            <ProjectCard
              key={i}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;

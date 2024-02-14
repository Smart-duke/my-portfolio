import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ imgsrc, title, text, view }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="first project card" />
      <h2 className="project-title">{title}</h2>
      <div className="details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to="google.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

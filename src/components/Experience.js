import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectSkill = ({ skill }) => {
  return <span className="project-skill">{skill}</span>;
};

const ProjectSkills = ({ skills }) => {
  return (
    <div className="project-skills">
      {skills.map((skill, index) => {
        return <ProjectSkill skill={skill} key={index} />;
      })}
    </div>
  );
};

const ProjectCard = (props) => {
  const { image, title, description, skills, links } = props;

  return (
    <div className="project-card">
       <img alt="project" className="project-image" src={image} />
      <div className="project-background" />
      <div className="project-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <ProjectSkills skills={skills} />
      </div>
    </div>
  );
};

const Experience = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((proj) => (
        <ProjectCard
          title={proj.title}
          description={proj.description}
          skills={proj.skills}
          links={proj.links}
          image={proj.image}
          key={proj.title}
        />
      ))}
    </div>
  );
};

export default React.memo(Experience);

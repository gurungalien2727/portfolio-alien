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

const ProjectLinks = ({ links: { github, preview } }) => {
  return (
    <div className="project-links">
       <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link secondary"
      >
        <FontAwesomeIcon icon={["fab", "github"]} /> View Source
      </a>
      {preview !== "" && (
        <a
          href={preview}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Watch Video 
        </a>
      )}
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
        <ProjectLinks links={links} />
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
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

export default React.memo(Projects);

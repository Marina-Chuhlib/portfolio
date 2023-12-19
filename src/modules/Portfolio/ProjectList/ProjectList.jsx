import React from "react";
import PropTypes from "prop-types";

import ProjectItem from "../ProjectItem/ProjectItem";

import getProjectData from "../../../shared/services/projectData";

import css from "./projectList.module.css";

const ProjectList = ({ theme }) => {
  const projectData = getProjectData();

  return (
    <ul className={`${css.list} ${theme === "light" ? css.light : css.dark}`}>
      {projectData.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          link={project.link}
          image={project.image}
          text={project.text}
          content={project.content}
          linkTitle={project.linkTitle}
          gitHubLink={project.gitHubLink}
          theme={theme}
        />
      ))}
    </ul>
  );
};

ProjectList.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ProjectList;

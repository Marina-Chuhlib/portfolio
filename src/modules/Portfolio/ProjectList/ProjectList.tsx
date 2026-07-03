import ProjectItem from "../ProjectItem/ProjectItem";

import useProjectData from "../../../shared/services/projectData";

import css from "./projectList.module.css";

import { Theme } from "shared/theme/type";

interface ProjectListProps {
  theme: Theme;
}

const ProjectList = ({ theme }: ProjectListProps) => {
  const projectData = useProjectData();

  return (
    <ul className={`${css.list} ${theme === 'light' ? css.light : css.dark}`}>
      {projectData.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          link={project.link}
          image={project.image}
          text={project.text}
          content={project.content}
          linkTitle={project.linkTitle}
          apk={project.apk}
          theme={theme}
        />
      ))}
    </ul>
  );
};

export default ProjectList;

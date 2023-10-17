import React from "react";
import { useTranslation } from "react-i18next";

import ProjectItem from "../ProjectItem/ProjectItem";
import yourPet from "../../../images/yourPet.png";
import filmoteka from "../../../images/filmoteka.png";
import icecream from "../../../images/icecream.png";
import webStudio from "../../../images/webStudio.png";

import css from "./projectList.module.css";

const ProjectList = ({ theme }) => {
  const { t } = useTranslation();

  const projectData = [
    {
      title: "Your Pet",
      link: "https://marina-chuhlib.github.io/goit-markup-hw-08/",
      image: yourPet,
      text: t("yourPetCardText"),
      content: (
        <>
          <p className={css.content}>{t("yourPetContent")}</p>
          <p className={css.content}>{t("yourPetTechnologies")}</p>
        </>
      ),
      linkTitle: "Your Pet",
      gitHubLink: "https://github.com/Marina-Chuhlib/YourPet-FrontEnd",
    },
    {
      title: "Filmoteka",
      link: "https://olenateplodar.github.io/team-project-movie-library/",
      image: filmoteka,
      text: t("FilmotekaText"),
      content: (
        <>
          <p className={css.content}>{t("FilmotekaContent")}</p>
          <p className={css.content}>{t("FilmotekaTechnologies")}</p>
        </>
      ),
      linkTitle: "Web Studio",
      gitHubLink:
        "https://github.com/Marina-Chuhlib/team-project-movie-library",
    },
    {
      title: "ICE CREAM",
      link: "https://nordmi.github.io/ITFly/",
      image: icecream,
      text: t("icecreamText"),
      content: (
        <>
          <p className={css.content}>{t("icecreamContent")}</p>
          <p className={css.content}>{t("icecreamTechnologies")}</p>
        </>
      ),
      linkTitle: "Ice cream",
      gitHubLink: "https://github.com/Marina-Chuhlib/ITFly",
    },
    {
      title: "Web Studio",
      link: "https://marina-chuhlib.github.io/goit-markup-hw-08/",
      image: webStudio,
      text: t("webStudioText"),
      content: (
        <>
          <p className={css.content}>{t("webStudioContent")}</p>
          <p className={css.content}>{t("webStudioTechnologies")}</p>
        </>
      ),
      linkTitle: "Web Studio",
      gitHubLink: "https://github.com/Marina-Chuhlib/goit-markup-hw-08",
    },
  ];

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

export default ProjectList;

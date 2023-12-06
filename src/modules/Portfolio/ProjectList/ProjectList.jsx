import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import ProjectItem from "../ProjectItem/ProjectItem";
import yourPet from "../../../images/yourPet.png";
import phoneBook from "../../../images/phoneBook.png";
import todoList from "../../../images/todo-list.png";
import filmoteka from "../../../images/filmoteka.png";
import icecream from "../../../images/icecream.png";
import webStudio from "../../../images/webStudio.png";

import css from "./projectList.module.css";

const ProjectList = ({ theme }) => {
  const { t } = useTranslation();

  const projectData = [
    {
      title: "Pet Care",
      link: "https://marina-chuhlib.github.io/YourPet-FrontEnd/",
      image: yourPet,
      text: t("yourPetCardText"),
      content: (
        <>
          <p className={css.content}>{t("yourPetContent")}</p>
          <p className={css.content}>{t("yourPetTechnologies")}</p>
        </>
      ),
      linkTitle: "Pet Care",
    },

    {
      title: "Digital Phone List",
      link: "https://marina-chuhlib.github.io/goit-react-hw-08-phonebook/",
      image: phoneBook,
      text: t("phoneBookText"),
      content: (
        <>
          <p className={css.content}>{t("phoneBookContent")}</p>
          <p className={css.content}>{t("phoneBookTechnologies")}</p>
        </>
      ),
      linkTitle: "Digital Phone List",
    },
    {
      title: "To Do List",
      link: "https://marina-chuhlib.github.io/todo-list-typescript",
      image: todoList,
      text: t("toDoList"),
      content: (
        <>
          <p className={css.content}>{t("toDoListContent")}</p>
          <p className={css.content}>{t("toDoListTechnologies")}</p>
        </>
      ),
      linkTitle: "To Do List",
    },
    {
      title: "World Cinema Premieres",
      link: "https://olenateplodar.github.io/team-project-movie-library/",
      image: filmoteka,
      text: t("FilmotekaText"),
      content: (
        <>
          <p className={css.content}>{t("FilmotekaContent")}</p>
          <p className={css.content}>{t("FilmotekaTechnologies")}</p>
        </>
      ),
      linkTitle: "World Cinema Premieres",
    },
    {
      title: "Ice Cream World",
      link: "https://nordmi.github.io/ITFly/",
      image: icecream,
      text: t("icecreamText"),
      content: (
        <>
          <p className={css.content}>{t("icecreamContent")}</p>
          <p className={css.content}>{t("icecreamTechnologies")}</p>
        </>
      ),
      linkTitle: "Ice Cream World",
    },
    {
      title: "Web Design Workshop",
      link: "https://marina-chuhlib.github.io/goit-markup-hw-08/",
      image: webStudio,
      text: t("webStudioText"),
      content: (
        <>
          <p className={css.content}>{t("webStudioContent")}</p>
          <p className={css.content}>{t("webStudioTechnologies")}</p>
        </>
      ),
      linkTitle: "Web Design Workshop",
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

ProjectList.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ProjectList;

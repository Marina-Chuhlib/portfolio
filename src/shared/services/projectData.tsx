import { useTranslation } from "react-i18next";

import ecosolution from "../../images/ecosolution.png";
import yourPet from "../../images/yourPet.png";
import phoneBook from "../../images/phoneBook.png";
import todoList from "../../images/todo-list.png";
import filmoteka from "../../images/filmoteka.png";
import icecream from "../../images/icecream.png";
import webStudio from "../../images/webStudio.png";
import cryptoTracker from "../../images/cryptoTracker.png";

import type { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
  text: string;
  content: ReactNode;
  linkTitle: string;
  apk?: string;
}

const useProjectData = (): Project[] => {
  const { t } = useTranslation();
  return [
    {
      id: "1app",
      title: "Crypto Tracker",
      link: "https://github.com/Marina-Chuhlib/crypto-tracker",
      image: cryptoTracker,
      text: t("cryptoTrackerCardText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("cryptoTrackerContent")}</p>
          <p>{t("cryptoTrackerTechnologies")}</p>
        </>
      ),
      linkTitle: "Crypto Tracker",
      apk: "https://github.com/Marina-Chuhlib/crypto-tracker",
    },
    {
      id: "2",
      title: "Nature Energy",
      link: "https://ecosolution-sigma.vercel.app",
      image: ecosolution,
      text: t("ecosolutionCardText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("ecosolutionContent")}</p>
          <p>{t("ecosolutionTechnologies")}</p>
        </>
      ),
      linkTitle: "Pet Care",
    },
    {
      id: "2",
      title: "Pet Care",
      link: "https://marina-chuhlib.github.io/YourPet-FrontEnd/",
      image: yourPet,
      text: t("yourPetCardText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("yourPetContent")}</p>
          <p>{t("yourPetTechnologies")}</p>
        </>
      ),
      linkTitle: "Pet Care",
    },

    {
      id: "3",
      title: "Digital Phone List",
      link: "https://marina-chuhlib.github.io/goit-react-hw-08-phonebook/",
      image: phoneBook,
      text: t("phoneBookText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("phoneBookContent")}</p>
          <p>{t("phoneBookTechnologies")}</p>
        </>
      ),
      linkTitle: "Digital Phone List",
    },
    {
      id: "4",
      title: "To Do List",
      link: "https://marina-chuhlib.github.io/todo-list-typescript",
      image: todoList,
      text: t("toDoList"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("toDoListContent")}</p>
          <p>{t("toDoListTechnologies")}</p>
        </>
      ),
      linkTitle: "To Do List",
    },
    {
      id: "5",
      title: "World Cinema Premieres",
      link: "https://olenateplodar.github.io/team-project-movie-library/",
      image: filmoteka,
      text: t("FilmotekaText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("FilmotekaContent")}</p>
          <p>{t("FilmotekaTechnologies")}</p>
        </>
      ),
      linkTitle: "World Cinema Premieres",
    },
    {
      id: "6",
      title: "Ice Cream World",
      link: "https://nordmi.github.io/ITFly/",
      image: icecream,
      text: t("icecreamText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("icecreamContent")}</p>
          <p>{t("icecreamTechnologies")}</p>
        </>
      ),
      linkTitle: "Ice Cream World",
    },
    {
      id: "7",
      title: "Web Design Workshop",
      link: "https://marina-chuhlib.github.io/goit-markup-hw-08/",
      image: webStudio,
      text: t("webStudioText"),
      content: (
        <>
          <p style={{ marginBottom: "18px" }}>{t("webStudioContent")}</p>
          <p>{t("webStudioTechnologies")}</p>
        </>
      ),
      linkTitle: "Web Design Workshop",
    },
  ];
};

export default useProjectData;

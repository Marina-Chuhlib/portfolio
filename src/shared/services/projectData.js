import { useTranslation } from "react-i18next";

import ecosolution from "../../images/ecosolution.png";
import yourPet from "../../images/yourPet.png";
import phoneBook from "../../images/phoneBook.png";
import todoList from "../../images/todo-list.png";
import filmoteka from "../../images/filmoteka.png";
import icecream from "../../images/icecream.png";
import webStudio from "../../images/webStudio.png";

const getProjectData = () => {
  const ProjectDataComponent = () => {
    const { t } = useTranslation();

    return [
      {
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
  return ProjectDataComponent();
};

export default getProjectData;

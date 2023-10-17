import React from "react";
import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";

import InfoModal from "../../../shared/components/InfoModal/InfoModal";

import css from "./projectItem.module.css";


const ProjectItem = ({
  title,
  link,
  image,
  text,
  content,
  linkTitle,
  gitHubLink,
  theme,
}) => {
  const { t } = useTranslation();

  return (
    <li className={`${css.item} ${theme === "light" ? css.light : css.dark}`}>
      <div className={css.thumb}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          title={`Visit ${title}`}
        >
          <h3 className={css.caption}>{title}</h3>
          <img src={image} alt={title} width={300} className={css.photo} />
        </a>
      </div>
      <p className={css.cardText}>{text}</p>
      <div className={css.wrapper}>
        <InfoModal
          denotation={t("skillsBtn")}
          title={title}
          content={content}
          linkDenotation={t("visitBtn")}
          link={link}
          linkTitle={linkTitle}
          closeBtn={t("closeBtn")}
        />
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          title={title}
          className={css.link}
        >
          {t("visitBtn")}
        </a>
        <a
          href={gitHubLink}
          target="_blank"
          rel="noreferrer noopener"
          title={`GitHub ${title}`}
          className={css.icon}
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;

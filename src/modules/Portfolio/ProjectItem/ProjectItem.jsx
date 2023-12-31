import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import InfoModal from "../../../shared/components/InfoModal/InfoModal";

import css from "./projectItem.module.css";

const ProjectItem = ({
  title,
  link,
  image,
  text,
  content,
  linkTitle,
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
          <div className={css.photoThumb}> <img src={image} alt={title} width={300} className={css.photo} /></div>
         
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
      </div>
    </li>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  linkTitle: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ProjectItem;

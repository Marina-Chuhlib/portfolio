import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import InfoModal from "../../../shared/components/InfoModal/InfoModal";

import css from "./projectItem.module.css";

import { Theme } from "shared/theme/type";

export interface Item {
  id: string;
  title: string;
  link: string;
  image: string;
  text: string;
  content: ReactNode;
  linkTitle: string;
  apk?: string;
  theme: Theme;
}

const ProjectItem = ({
  id,
  title,
  link,
  image,
  text,
  content,
  linkTitle,
  apk,
  theme,
}: Item) => {
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
          linkDenotation={apk ? "GitHub Link" : t("visitBtn")}
          link={link}
          linkTitle={linkTitle}
          closeBtn={t("closeBtn")}
        />
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          title={title}
          className={`${css.link} ${theme === "light" ? css.light : css.dark}`}
        >
          {apk ? "GitHub Link" : t("visitBtn")}
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;

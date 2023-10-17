import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../shared/theme/ThemeProvider";

import ProjectList from "./ProjectList/ProjectList";

import css from "./portfolio.module.css";
const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      className={`${css.container} ${theme === "light" ? css.light : css.dark}`}
    >
      <div className={css.sectionWrapper}>
        <h2 className={css.title} id="portfolio">
          {t("projectTitle")}
        </h2>
        <p className={css.text}>{t("portfolioText")}</p>

        <div>
          <ProjectList theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

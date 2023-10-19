import React, { useContext } from "react";

import { useTranslation } from "react-i18next";

import ModalConfirm from "../../shared/components/ModalConfirm/ModalConfirm";

import { ThemeContext } from "../../shared/theme/ThemeProvider";

import Skills from "./Skills/Skills";

import marina from "../../images/portrait.jpg";

import css from "./about.module.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      className={`${css.container} ${theme === "light" ? css.light : css.dark}`}
    >
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <h2 className={css.title} id="about">
            {t("aboutTitle")}
          </h2>
          <p className={css.content}>{t("aboutContent")}</p>
          <ModalConfirm
            className={css.modal}
            denotation={t("showCvBtn")}
            confirmText={t("confirmText")}
            disagreeBtnText={t("disagreeBtnText")}
            agreeBtnText={t("agreeBtnText")}
          />
        </div>
        <div className={css.thumb}>
          <img
            src={marina}
            alt="photo of Marina"
            width={370}
            className={css.photo}
          />
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;

import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../../shared/theme/ThemeProvider";

import InfoModal from "../../../shared/components/InfoModal/InfoModal";

import skills from "../../../utils/i18n/locales/skillsTranslations.json";

import certificate from "../../../images/certificate.png";
import addition1 from "../../../images/addition1.png";
import addition2 from "../../../images/addition2.png";

import css from "./skills.module.css";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const selectedLanguage = localStorage.getItem("language") || "en";

  return (
    <div
      className={`${css.skillsWrapper} ${
        theme === "light" ? css.light : css.dark
      }`}
    >
      <div className={css.certificateWrapper}>
        <h3 className={css.titleSkills}>{t("skillsTitle")}</h3>
        <div className={css.certificateThumb}>
          <img
            src={certificate}
            alt="certificate"
            width={400}
            className={css.picture}
          />
        </div>

        <InfoModal
          className={css.modalBtn}
          denotation={t("skillsBtn")}
          title={t("certificateTitle")}
          closeBtn={t("closeBtn")}
          content={
            <>
              <img
                src={addition1}
                alt="details"
                width={550}
                className={`${css.img} ${
                  theme === "light" ? css.light : css.dark
                }`}
              />
              <img
                src={addition2}
                alt="details"
                width={550}
                className={`${css.img} ${
                  theme === "light" ? css.light : css.dark
                }`}
              />
            </>
          }
        />
      </div>

      <div className={css.listWrapper}>
        <dl className={css.list}>
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <dt className={css.item}>
                {selectedLanguage === "ua" ? skill.ua.key : skill.en.key}
              </dt>
              <dd className={css.descr}>
                {selectedLanguage === "ua" ? skill.ua.value : skill.en.value}
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Skills;

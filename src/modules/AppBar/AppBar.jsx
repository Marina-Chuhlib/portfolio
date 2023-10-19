import { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../shared/theme/ThemeProvider";

import ChangeLanguage from "../../shared/components/ChangeLanguage/ChangeLanguage";
import ChangeTheme from "../../shared/components/ChangeTheme/ChangeTheme";


import css from "./appBar.module.css";

const AppBar = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const clickHandler = (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 30;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", clickHandler);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", clickHandler);
      });
    };
  }, []);

  return (
    <header
      className={`${css.container} ${theme === "light" ? css.light : css.dark}`}
    >
      <div className={css.wrapper}>
        <a
          className={`${css.title} ${theme === "light" ? css.light : css.dark}`}
          href="#about"
        >
          {t("name")}
        </a>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                href="#about"
                className={`${css.link} ${
                  theme === "light" ? css.light : css.dark
                }`}
              >
                {t("about")}
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#portfolio"
                className={`${css.link} ${
                  theme === "light" ? css.light : css.dark
                }`}
              >
                {t("portfolio")}
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#contact"
                className={`${css.link} ${
                  theme === "light" ? css.light : css.dark
                }`}
              >
                {t("contact")}
              </a>
            </li>
          </ul>
        </nav>
        <div className={css.possibilityWrap}>
          <ChangeLanguage />
          <ChangeTheme />
        </div>
      </div>
    </header>
  );
};

export default AppBar;

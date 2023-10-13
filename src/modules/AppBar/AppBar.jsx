import { useEffect, useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeContext } from "../../shared/theme/ThemeProvider";

import css from "./appBar.module.css";

const AppBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
          Marina
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
                About
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#portfolio"
                className={`${css.link} ${
                  theme === "light" ? css.light : css.dark
                }`}
              >
                Portfolio
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#contact"
                className={`${css.link} ${
                  theme === "light" ? css.light : css.dark
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {theme === "light" ? (
          <button
            className={`${css.themeBtn} ${
              theme === "light" ? css.light : css.dark
            }`}
            onClick={toggleTheme}
          >
            <NightsStayIcon className={css.themeIconDark} />
          </button>
        ) : (
          <button
            className={`${css.themeBtn} ${
              theme === "light" ? css.light : css.dark
            }`}
            onClick={toggleTheme}
          >
            <LightModeIcon className={css.themeIconLight} />
          </button>
        )}
      </div>
    </header>
  );
};

export default AppBar;

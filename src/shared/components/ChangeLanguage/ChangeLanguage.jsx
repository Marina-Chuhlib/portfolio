import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import i18n from "../../../utils/i18n/config";

import css from "./changeLanguage.module.css";

const options = [
  { label: "EN", value: "en" },
  { label: "UA", value: "ua" },
];

const ChangeLanguage = () => {
  const { theme } = useContext(ThemeContext);
  const language = localStorage.getItem("language") || "en";

  function changeLanguage(value) {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
  }

  return (
    <div
      className={`${css.container} ${theme === "light" ? css.light : css.dark} ${language === "ua" ? css.ua : ""}`}
    >
      <div className={css.sliderTrack}>
        <button
          type="button"
          className={`${css.option} ${language === "en" ? css.active : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          type="button"
          className={`${css.option} ${language === "ua" ? css.active : ""}`}
          onClick={() => changeLanguage("ua")}
        >
          UA
        </button>
        <span className={css.indicator} />
      </div>
    </div>
  );
};

export default ChangeLanguage;

import { useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

import { ThemeContext } from "../../theme/ThemeProvider";

import css from "./changeTheme.module.css";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
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
    </>
  );
};

export default ChangeTheme;

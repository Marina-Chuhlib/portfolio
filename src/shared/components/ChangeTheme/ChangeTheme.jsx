import { useContext } from "react";

import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";

import { ThemeContext } from "../../theme/ThemeProvider";

import css from "./changeTheme.module.css";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`${css.themeBtn} ${theme === "light" ? css.light : css.dark}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <BedtimeRoundedIcon className={css.themeIconDark} fontSize="small" />
      ) : (
        <LightModeRoundedIcon className={css.themeIconLight} fontSize="small" />
      )}
    </button>
  );
};

// const ChangeTheme = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <>
//       {theme === "light" ? (
//         <button type="button"
//           className={`${css.themeBtn} ${
//             theme === "light" ? css.light : css.dark
//           }`}
//           onClick={toggleTheme}
//         >
//           <NightsStayIcon className={css.themeIconDark} />
//         </button>
//       ) : (
//         <button type="button"
//           className={`${css.themeBtn} ${
//             theme === "light" ? css.light : css.dark
//           }`}
//           onClick={toggleTheme}
//         >
//           <LightModeIcon className={css.themeIconLight} />
//         </button>
//       )}
//     </>
//   );
// };

export default ChangeTheme;

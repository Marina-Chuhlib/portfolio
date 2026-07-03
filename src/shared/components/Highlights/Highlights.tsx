import { useContext } from "react";
import { useTranslation } from "react-i18next";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LanguageIcon from "@mui/icons-material/Language";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import TableChartIcon from "@mui/icons-material/TableChart";

import { ThemeContext } from "../../theme/ThemeProvider";

import css from "./highlights.module.css";

interface Highlight {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  textKey: string;
}

const highlights: Highlight[] = [
  {
    id: "production-ready",
    icon: <RocketLaunchIcon fontSize="medium" />,
    titleKey: "highlightProductionTitle",
    textKey: "highlightProductionText",
  },
  {
    id: "complex-ui",
    icon: <TableChartIcon fontSize="medium" />,
    titleKey: "highlightUiTitle",
    textKey: "highlightUiText",
  },
  {
    id: "i18n",
    icon: <LanguageIcon fontSize="medium" />,
    titleKey: "highlightI18nTitle",
    textKey: "highlightI18nText",
  },
  {
    id: "architecture",
    icon: <ArchitectureIcon fontSize="medium" />,
    titleKey: "highlightArchitectureTitle",
    textKey: "highlightArchitectureText",
  },
];

const Highlights = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <ul className={`${css.list} ${theme === "light" ? css.light : css.dark}`}>
      {highlights.map((item) => (
        <li
          key={item.id}
          className={`${css.card} ${theme === "light" ? css.light : css.dark}`}
        >
          <span className={css.icon}>{item.icon}</span>
          <h3 className={css.title}>{t(item.titleKey)}</h3>
          <p className={css.text}>{t(item.textKey)}</p>
        </li>
      ))}
    </ul>
  );
};

export default Highlights;

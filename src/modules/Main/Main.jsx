import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../shared/theme/ThemeProvider";
import CodeSnippet from "../../shared/components/CodeSnippet/CodeSnippet";

import image from "../../images/image.png";

import css from "./main.module.css";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      className={`${css.container} ${theme === "light" ? css.light : css.dark}`}
    >
      <div className={css.wrapper}>
        <div className={css.heroCard}>
          <div className={css.badge}>Frontend Developer</div>
          <h1 className={css.title}>{t("mainText")}</h1>
          <p className={css.subtitle}>
            {t("mainSubtitle")}
          </p>
        </div>
        {/* <div className={css.thumb}> */}
          {/* <img src={image} alt="picture" width="200" className={css.photo} /> */}
          <CodeSnippet />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Main;

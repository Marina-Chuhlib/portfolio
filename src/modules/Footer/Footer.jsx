import { useContext } from "react";
import { useTranslation } from "react-i18next";

import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import { ReactComponent as Icon } from "../../images/linkedin.svg";
import { ThemeContext } from "../../shared/theme/ThemeProvider";

import css from "./footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <footer
      className={`${css.wrapper} ${theme === "light" ? css.light : css.dark}`}
    >
      <div
        id="contact"
        className={`${css.container} ${
          theme === "light" ? css.light : css.dark
        }`}
      >
        <h2 className={css.title}>{t("contactTitle")} </h2>
        <div className={css.listWrapper}>
          <ul className={css.contactList}>
            <li className={css.item}>
              <a href="tel:+905312993731" className={css.link}>
                <span className={css.decor}>{t("phone")} </span>
                +90-531-299-37-31
              </a>
            </li>
            <li className={css.item}>
              <a href="mailto:marinachuhlib@gmail.com" className={css.link}>
                <span className={css.decor}> {t("email")}</span>
                marinachuhlib@gmail.com
              </a>
            </li>
          </ul>

          <ul className={css.socialList}>
            <li>
              <a
                href="https://www.linkedin.com/in/marina-chukhlib/"
                target="_blank"
                rel="noreferrer noopener"
                title="Linkedin Marina-Chukhlib"
                className={css.linkSocial}
              >
                <Icon className={css.inLink} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Marina-Chuhlib"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub Marina-Chukhlib"
                className={css.linkSocial}
              >
                <div className={css.iconWrap}>
                  <GitHubIcon className={css.icon} />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/marinaChukhlib"
                target="_blank"
                rel="noreferrer noopener"
                title="Telegram Marina-Chukhlib"
                className={css.linkSocial}
              >
                <div className={css.iconWrap}>
                  <TelegramIcon className={css.icon} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../theme/ThemeProvider";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import css from "./scrollButton.module.css";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} className={css.scroll}>
      <button
        onClick={scrollToTop}
        className={`${css.btnScroll} ${
          theme === "light" ? css.light : css.dark
        }`}
      >
        <KeyboardDoubleArrowUpIcon />
        {t("topBtn")}
      </button>
    </div>
  );
};

export default ScrollButton;

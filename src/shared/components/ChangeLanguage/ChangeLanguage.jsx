import i18n from "../../../utils/i18n/config";

import css from "./changeLanguage.module.css"

const options = [
  {
    label: "EN",
    value: "en",
  },
  {
    label: "UA",
    value: "ua",
  },
];

const ChangeLanguage = () => {
  function changeLanguage(e) {
    const currentLng = e.target.value;
    localStorage.setItem("language", currentLng);
    const language = localStorage.getItem("language");

    i18n.changeLanguage(language);
  }

  const language = localStorage.getItem("language");

  return (
    <div>
      <select value={language || "en"} onChange={changeLanguage} className={css.wrapper}>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLanguage;

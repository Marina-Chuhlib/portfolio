import photo from "../../images/portrait.jpg";

import certificate from "../../images/certificate.png";
import addition1 from "../../images/addition1.png";
import addition2 from "../../images/addition2.png";

import ModalConfirm from "../../shared/components/modalConfirm/ModalConfirm";

import InfoModal from "../../shared/components/InfoModal/InfoModal";

import { useContext } from "react";
import { ThemeContext } from "../../shared/theme/ThemeProvider";

import css from "./about.module.css";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${css.container} ${theme === "light" ? css.light : css.dark}`}
    >
      {/* About */}

      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <h2 className={css.title} id="about">
            About Me
          </h2>
          <p className={css.content}>
            I'm a Marina Chukhlib junior frontend developer with proficiency in
            HTML, CSS, JavaScript, React, and Node.js. I'm passionate about
            creating attractive and user-friendly web interfaces, and I'm eager
            to learn and grow in the field of web development.
          </p>
          <ModalConfirm className={css.modal} />
        </div>
        <div className={css.thumb}>
          <img
            src={photo}
            alt="photo of Marina"
            width={370}
            className={css.photo}
          />
        </div>
      </div>

      {/* Skills */}

      <div className={css.skillsWrapper}>
        <div className={css.certificateWrapper}>
          <h3 className={css.titleSkills}>Skills</h3>
          <div className={css.certificateThumb}>
            <img
              src={certificate}
              alt="certificate"
              width={400}
              className={css.picture}
            />
          </div>

          <InfoModal
            className={css.modalBtn}
            denotation={"More details"}
            title={"Certificate"}
            content={
              <>
                <img
                  src={addition1}
                  alt="details"
                  width={550}
                  className={`${css.img} ${
                    theme === "light" ? css.light : css.dark
                  }`}
                />
                <img
                  src={addition2}
                  alt="details"
                  width={550}
                  className={`${css.img} ${
                    theme === "light" ? css.light : css.dark
                  }`}
                />
              </>
            }
          />
        </div>

        <div className={css.listWrapper}>
          <dl className={css.list}>
            <dt className={css.item}>HTML5/CSS3/SASS Responsive Design:</dt>
            <dd className={css.descr}>
              Skilled in creating responsive web designs using HTML5, CSS3, and
              SASS for various devices.
            </dd>
            <dt className={css.item}> JavaScript/TypeScript: </dt>
            <dd className={css.descr}>
              Proficient in JavaScript and TypeScript for dynamic web
              development.
            </dd>

            <dt className={css.item}> React/Redux: </dt>
            <dd className={css.descr}>
              Experienced in building user interfaces with React and state
              management using Redux.
            </dd>
            <dt className={css.item}> React Native:</dt>
            <dd className={css.descr}>
              Proficient in developing cross-platform mobile applications using
              React Native.
            </dd>
            <dt className={css.item}>Backend: </dt>
            <dd className={css.descr}>
              Knowledge of Node.js for server-side development.
            </dd>
            <dt className={css.item}> Database: </dt>
            <dd className={css.descr}>
              Familiarity with MongoDB for data storage.
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;

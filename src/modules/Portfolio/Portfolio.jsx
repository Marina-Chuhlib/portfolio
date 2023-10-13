import css from "./portfolio.module.css";

import webStudio from "../../images/webStudio.png";
import icecream from "../../images/icecream.png";
import filmoteka from "../../images/filmoteka.png";
import yourPet from "../../images/yourPet.png";

import InfoModal from "../../shared/components/InfoModal/InfoModal";

import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useContext } from "react";
import { ThemeContext } from "../../shared/theme/ThemeProvider";

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);

  const denotation = "Learn more";
  const linkDenotation = "Visit website";

  return (
    <section
      className={`${css.container} ${theme === "light" ? css.light : css.dark}`}
    >
      <div className={css.sectionWrapper}>
        <h2 className={css.title} id="portfolio">
          Projects
        </h2>
        <p className={css.text}>
          In this section, you can explore my individual and collaborative group
          projects
        </p>

        <div>
          <ul className={css.list}>
            <li className={css.item}>
              <div className={css.thumb}>
                <a
                  href="https://marina-chuhlib.github.io/goit-markup-hw-08/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Visit Your Pet"
                >
                  <h3 className={css.caption}>Your Pet</h3>
                  <img
                    src={yourPet}
                    alt="yourPet"
                    width={300}
                    className={css.photo}
                  />
                </a>
              </div>
              <p className={css.cardText}>
                An application for posting pet ads, including lost pets and
                those looking for new homes, with user registration and personal
                pet information card creation.
              </p>
              <div className={css.wrapper}>
                <InfoModal
                  denotation={denotation}
                  title={"Your Pet"}
                  content={
                    <>
                      <p className={css.content}>
                        An adaptive application for posting pet ads, whether for
                        selling, giving them to good homes, or searching for
                        lost pets. The project includes user registration and
                        personal account management, allowing users to create
                        and manage pet information cards. Notably, the website
                        supports bilingual content and offers both light and
                        dark themes for user preference.
                      </p>
                      <p className={css.content}>
                        Tools and technologies used: HTML, CSS, JavaScript,
                        React, Redux Toolkit, Node.js, Express, MongoDB, Axios,
                        Material-UI, Formik. Role: Team leader.
                      </p>
                    </>
                  }
                  linkDenotation={linkDenotation}
                  link={"https://marina-chuhlib.github.io/YourPet-FrontEnd/"}
                  linkTitle={"Your Pet"}
                />
                <a
                  className={css.link}
                  href="https://marina-chuhlib.github.io/YourPet-FrontEnd/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Your Pet"
                >
                  Visit website
                </a>
                <a
                  href="https://github.com/Marina-Chuhlib/YourPet-FrontEnd"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="GitHub Your Pet"
                  className={css.gitIcon}
                >
                  <GitHubIcon className={css.icon} fontSize="large" />
                </a>
              </div>
            </li>

            {/* 3 */}
            <li className={css.item}>
              <div className={css.thumb}>
                <a
                  href="https://olenateplodar.github.io/team-project-movie-library/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Visit Filmoteka"
                >
                  <h3 className={css.caption}>Filmoteka</h3>
                  <img
                    src={filmoteka}
                    alt="Filmoteka"
                    width={300}
                    className={css.photo}
                  />
                </a>
              </div>
              <p className={css.cardText}>
                An adaptive application for choosing movies and saving them to
                own user lists. I created the modal window with information
                about the selected movie.
              </p>
              <div className={css.wrapper}>
                <InfoModal
                  denotation={denotation}
                  title={"Filmoteka"}
                  content={
                    <>
                      <p className={css.content}>
                        The website is a movie library application that allows
                        users to search for movies by title and manage their
                        watched and favorite films. It's a user-friendly movie
                        library application for movie enthusiasts to keep track
                        of their film collection and discover new titles.
                      </p>
                      <p className={css.content}>
                        The website was built using HTML/CSS for structuring and
                        styling, JavaScript for interactivity and functionality,
                        a REST API to fetch movie data, AJAX for managing
                        asynchronous data requests, and Parcel as a bundler to
                        handle project assets and resources. Role: Developer.
                      </p>
                    </>
                  }
                  linkDenotation={linkDenotation}
                  link={
                    "https://olenateplodar.github.io/team-project-movie-library/"
                  }
                  linkTitle={"Web Studio"}
                />
                <a
                  className={css.link}
                  href="https://olenateplodar.github.io/team-project-movie-library/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Filmoteka"
                >
                  Visit website
                </a>
                <a
                  href="https://github.com/Marina-Chuhlib/team-project-movie-library"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="GitHub Movie-library"
                >
                  <GitHubIcon className={css.icon} fontSize="large" />
                </a>
              </div>
            </li>

            {/* 2 */}
            <li className={css.item}>
              <div className={css.thumb}>
                <a
                  href="https://nordmi.github.io/ITFly/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Visit Ice cream website"
                >
                  <h3 className={css.caption}>ICE CREAM </h3>
                  <img
                    src={icecream}
                    alt="icecream"
                    width={300}
                    className={css.photo}
                  />
                </a>
              </div>
              <p className={css.cardText}>
                A website with a responsive layout, burger menu, modal window,
                and nice design wish animation elements.
              </p>
              <div className={css.wrapper}>
                <InfoModal
                  denotation={denotation}
                  title={"ICE CREAM"}
                  content={
                    <>
                      <p className={css.content}>
                        An ice cream shop website featuring a responsive design
                        that adapts seamlessly to various screen sizes, ensuring
                        an optimal user experience on both desktop and mobile
                        devices. The website boasts a visually appealing design
                        with animated elements that enhance its aesthetic
                        appeal. It includes a convenient burger menu for easy
                        navigation, allowing customers to explore the menu and
                        find their favorite ice cream flavors effortlessly.
                        Additionally, a modal window provides an interactive
                        experience, enabling customers to view detailed
                        information about each ice cream flavor and make
                        informed choices. This website combines functionality,
                        visual appeal, and user-friendly features to create an
                        enticing online presence for the ice cream shop.
                      </p>
                      <p className={css.content}>
                        Technologies used include HTML, SASS, JavaScript, and
                        Parcel. Role: Developer.
                      </p>
                    </>
                  }
                  linkDenotation={linkDenotation}
                  link={"https://nordmi.github.io/ITFly/"}
                  linkTitle={"Ice cream"}
                />
                <a
                  className={css.link}
                  href="https://nordmi.github.io/ITFly/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Ice cream"
                >
                  Visit website
                </a>
                <a
                  href="https://github.com/Marina-Chuhlib/ITFly"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="GitHub Ice cream"
                >
                  <GitHubIcon className={css.icon} fontSize="large" />
                </a>
              </div>
            </li>

            {/* 1 */}
            <li className={css.item}>
              <div className={css.thumb}>
                <a
                  href="https://marina-chuhlib.github.io/goit-markup-hw-08/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Visit Web studio"
                >
                  <h3 className={css.caption}>Web Studio</h3>
                  <img
                    src={webStudio}
                    alt="webStudio"
                    width={300}
                    className={css.photo}
                  />
                </a>
              </div>
              <p className={css.cardText}>
                The website with a responsive layout, modal window and
                attractive design.
              </p>
              <div className={css.wrapper}>
                <InfoModal
                  denotation={denotation}
                  title={"Web Studio"}
                  content={
                    <>
                      <p className={css.content}>
                        The website not only looks great but also functions
                        smoothly. It offers seamless navigation, quick load
                        times, and an intuitive user interface. The design and
                        layout of the site are aimed at delivering an engaging
                        user experience. It encourages visitors to explore the
                        site and access relevant information effortlessly. The
                        website serves as a showcase of the web studio's work,
                        highlighting their portfolio, services, and expertise.
                      </p>
                      <p className={css.content}>
                        In terms of the technologies used, the website is built
                        with HTML,SASS (a CSS preprocessor), JavaScript (for
                        interactivity), andParcel (a project bundler). These
                        technologies are commonly used to create modern and
                        responsive web applications. Role: Developer.
                      </p>
                    </>
                  }
                  linkDenotation={linkDenotation}
                  link={"https://marina-chuhlib.github.io/goit-markup-hw-08/"}
                  linkTitle={"Web Studio"}
                />
                <a
                  className={css.link}
                  href="https://marina-chuhlib.github.io/goit-markup-hw-08/"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Web studio"
                >
                  Visit website
                </a>
                <a
                  href="https://github.com/Marina-Chuhlib/goit-markup-hw-08"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="GitHub Web studio"
                >
                  <GitHubIcon className={css.icon} fontSize="large" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

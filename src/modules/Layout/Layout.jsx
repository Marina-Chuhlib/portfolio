import AppBar from "../AppBar/AppBar";
import Main from "../Main/Main";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

import ScrollButton from "../../shared/components/ScrollButton/ScrollButton";

const Layout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Main />
        <About />
        <Portfolio />
      </main>

      <Footer />
      
      <ScrollButton />
    </>
  );
};

export default Layout;

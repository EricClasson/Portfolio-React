import Hammenucont from "./components/Navbar/Hamburgermenu/Hammenucont";
import Aboutme from "./View/Aboutme";
import Contactme from "./View/Contactme";
import Header from "./View/Header";
import Projects from "./View/Projects";

const Home = () => {
  return (
    <section>
      <Header />
      <Projects />
      <Aboutme />
      <Contactme />
    </section>
  );
};

export default Home;

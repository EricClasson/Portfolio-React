import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";

import Projects from "./View/Projects";
import Navbar from "./View/Navbar";
import Aboutme from "./View/Aboutme";
import Contactme from "./View/Contactme";
import Hammenucont from "./components/Navbar/Hamburgermenu/Hammenucont";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About me" element={<Aboutme />} />
        <Route path="/Contact me" element={<Contactme />} />
        <Route path="/hamburgermenu" element={<Hammenucont />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import "../components/Aboutme/aboutme.scss";
import Skillsbyme from "../components/Aboutme/Skills-child/Skillsbyme";
import Toolbox from "../components/Aboutme/Skills-child/Toolbox";
import Upcomming from "../components/Aboutme/Skills-child/Upcoming";
import Textaboutme from "../components/Aboutme/textaboutme/Textaboutme";

//About me page - Parent

// Variabel för de skills jag kan jag använder
const skills = [
  "Javascript",
  "HTML5",
  "CSS3",
  "SASS",
  "REACT",
  "Agil Methods",
  "GIT",
  "GITHUB",
];
// Variabel för de uppcommning skills jag ska lära mig inom kort

const upcomming = [
  "Typescript",
  "UX and Grafical design",
  "Csharp",
  "NodeJs",
  "Express",
  "JWT",
  "Socket",
  "MongoDB",
];
("");
// Variabel för de toolbox jag använder
const toolbox = [
  "Slack",
  "VScode",
  "Trello",
  "Figma",
  "Adobe Photoshop",
  "Excel",
];

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h2>More About me </h2>
      <div className="aboutme-inner-container">
        <Textaboutme />
        <div className="skills-container">
          <div className="skillsbyme-container">
            <h2>Proficiencies and knowledge</h2>
            {skills.map((i, index) => (
              <Skillsbyme skills={i} key={index} /> // Map genom variabeln och propsar ut skillsbyme.jsx.
            ))}
          </div>
          <div className="skillsbyme-container">
            <h2>Proficiencies Upcomming</h2>
            <div className="skills-content">
              {upcomming.map((it, index) => (
                <Upcomming Upcomming={it} key={index} /> // Map genom variabeln och propsar ut upcomming.jsx.
              ))}
            </div>
          </div>
          <div className="skillsbyme-container">
            <h2>Toolbox</h2>
            <div className="skills-content">
              {toolbox.map((its, index) => (
                <Toolbox toolbox={its} key={index} /> // Map genom variabeln och propsar ut toobox.jsx.
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

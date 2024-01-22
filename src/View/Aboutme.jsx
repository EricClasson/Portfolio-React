import "../components/Aboutme/aboutme.scss";
import Skillsbyme from "../components/Aboutme/Skills-child/Skillsbyme";
import Toolbox from "../components/Aboutme/Skills-child/Toolbox";
import Upcomming from "../components/Aboutme/Skills-child/Upcoming";
import Textaboutme from "../components/Aboutme/textaboutme/Textaboutme";

//About me page - Parent

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

const upcomming = ["Typscript", "UX and Grafical design", "Csharp"];

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
            {skills.map((i) => (
              <Skillsbyme skills={i} />
            ))}
          </div>
          <div className="skillsbyme-container">
            <h2>Proficiencies Upcomming</h2>
            <div className="skills-content">
              {upcomming.map((it) => (
                <Upcomming Upcomming={it} />
              ))}
            </div>
          </div>
          <div className="skillsbyme-container">
            <h2>Toolbox</h2>
            <div className="skills-content">
              {toolbox.map((its) => (
                <Toolbox toolbox={its} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

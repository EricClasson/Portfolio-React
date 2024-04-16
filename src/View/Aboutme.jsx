import "../components/Aboutme/aboutme.scss";

import Textaboutme from "../components/Aboutme/textaboutme/Textaboutme";

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h2>More About me </h2>
      <div className="aboutme-inner-container">
        <Textaboutme />
        <div className="skills-container">
          <div className="skillsbyme-container">
            <h2>Proficiencies and knowledge</h2>
            <div className="skills_content">
              {" "}
              <ul>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Socket.Io</li>
                <li>JWT</li>
                <li>Tailwind</li>
              </ul>
              <ul>
                <li>REACT</li>
                <li>NodeJs</li>
                <li>UX and Grafical design</li>
                <li>Agil Methods</li>
                <li>GIT</li>
                <li>CSS3</li>
                <li>SASS</li>
              </ul>
            </div>
          </div>
          <div className="skillsbyme-container">
            <h2>Proficiencies Upcomming</h2>

            <div className="skills_content">
              {" "}
              <ul>
                <li>Typescript</li>
                <li>Csharp</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
          <div className="skillsbyme-container">
            <h2>Toolbox</h2>

            <div className="skills_content">
              {" "}
              <ul>
                <li>Slack</li>
                <li>VScode</li>
                <li>Trello</li>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

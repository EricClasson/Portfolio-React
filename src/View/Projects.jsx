import "../components/Work-repo/work.scss";
import Workcomponents from "../components/Work-repo/workchild/Workcomponets";
import memorycard from "../assets/memory.png";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import Apifetchcomponents from "../components/Work-repo/API-fetch/Apifetchcomponents";

//Prev Work page - Parent
const Projects = () => {
  // varibler som sparar det content på varje repo
  const projects = [
    {
      imgSrc:
        "https://github.com/EricClasson/Tip-Calculator/raw/main/design/desktop-preview.jpg",
      title: "Tip calculator",
      text: "This is a solution to the Tip calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      Writtenwith: [<DiJavascript />, <FaCss3Alt />, <IoLogoHtml5 />],
      githubLink: "https://github.com/EricClasson/Tip-Calculator",
      liveLink: "https://ericclasson.github.io/Tip-Calculator/",
    },
    {
      imgSrc: "https://api.pikwy.com/web/65a6a552450c755c893b7aa7.jpg",
      title: "Age calculator app solution",
      text: "This is a solution to the Age calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      Writtenwith: [<DiJavascript />, <FaCss3Alt />, <IoLogoHtml5 />],
      githubLink: "https://github.com/EricClasson/Age-Calculator-app",
      liveLink: "https://ericclasson.github.io/Age-Calculator-app/",
    },
    {
      imgSrc: memorycard,
      title: "Memory Game",
      text: "This is a solution to the JS1-examination. We as a group needed to build a memory game that followed certain demands.In the end it was a fun project.",
      Writtenwith: [<DiJavascript />, <FaCss3Alt />, <IoLogoHtml5 />],
      githubLink:
        "https://github.com/EricClasson/Memory-Games?tab=readme-ov-file",
      liveLink: "https://ericclasson.github.io/Memory-Games/",
    },
  ];
  return (
    <div className="Work-main">
      <h2>Highlighted projects..</h2>

      <div className="work-content">
        {/* Propsar och mapar genom arrayen så det skapas en ny div och skriv dess innehåll skrivs ut */}
        {projects.map((item, index) => (
          <Workcomponents
            imgSrc={item.imgSrc}
            title={item.title}
            text={item.text}
            githublink={item.githubLink}
            livelink={item.liveLink}
            Writtenwith={item.Writtenwith}
            key={index}
          />
        ))}
      </div>
      <div className="Listofrepo-api-container">
        <h2>All my repositories on github</h2>
        <Apifetchcomponents />
        <a
          href="https://github.com/EricClasson"
          target="_blank"
          className="btn btn-github"
        >
          Link to repo
        </a>
      </div>
    </div>
  );
};

export default Projects;

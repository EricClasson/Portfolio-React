import "../components/Work-repo/work.scss";
import Workcomponents from "../components/Work-repo/workchild/Workcomponets";
import memorycard from "../assets/memory.png";

//Prev Work page - Parent
const Projects = () => {
  const projects = [
    {
      imgSrc:
        "https://github.com/EricClasson/Tip-Calculator/raw/main/design/desktop-preview.jpg",
      title: "Tip calculator",
      text: "This is a solution to the Tip calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      githubLink: "https://github.com/BomanStatic/Tian-landing-page",
      liveLink: "https://github.com/BomanStatic/Tian-landing-page",
    },
    {
      imgSrc: "https://api.pikwy.com/web/65a6a552450c755c893b7aa7.jpg",
      title: "Age calculator app solution",
      text: "This is a solution to the Age calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      githubLink: "https://github.com/EricClasson/Age-Calculator-app",
      liveLink: "https://ericclasson.github.io/Age-Calculator-app/",
    },
    {
      imgSrc: memorycard,
      title: "Memory Game",
      text: "This is a solution to the JS1-examination. Where we as a group needed to build a memory game that followed certain demands.In the end it was a fun and learnt full project.",
      Writtenwith: { js: "JS", html: "HMTL", css: "CSS" },
      githubLink:
        "https://github.com/EricClasson/Memory-Games?tab=readme-ov-file",
      liveLink: "https://ericclasson.github.io/Memory-Games/",
    },
  ];
  return (
    <div className="Work-main">
      <h2>Projects</h2>

      <div className="work-content">
        {projects.map((item) => (
          <Workcomponents
            imgSrc={item.imgSrc}
            title={item.title}
            text={item.text}
            githublink={item.githubLink}
            livelink={item.liveLink}
            // Writtenwith={item.Writtenwith.js}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

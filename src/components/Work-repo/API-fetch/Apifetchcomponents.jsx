import { useEffect, useState } from "react";

const Apifetchcomponents = () => {
  const URL = "https://api.github.com/users/EricClasson/repos"; //URL:en som vi hämtar datan ifrån

  const [data, setData] = useState([]); //tom array till en början

  useEffect(() => {
    // useEffect används för att hantera sidoeffekter

    fetch(URL) // Gör ett HTTP GET-anrop till den angivna URL:en
      .then((resp) => resp.json())
      // Hanterar svaret från servern genom att omvandla det till JSON-format
      .then((data) => {
        setData(data); // Uppdaterar komponentens state med den hämtade datan
        console.log(data); //loggar egenskaper
      });
  }, []); // Tom array innebär att useEffect endast körs vid komponentens första rendering

  return (
    <div className="Apifetch-container">
      {data.map((repo) => (
        <article key={repo.id} className="api-content">
          <a href={repo.html_url} target="_blank" className="btn btn-api">
            <h3>{repo.name}</h3>
          </a>

          <p>{repo.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Apifetchcomponents;

import { useEffect, useState } from "react";

const Apifetchcomponents = () => {
  const URL = "https://api.github.com/users/EricClasson/repos"; //URL:en som vi hämtar datan ifrån
  const baseurl = "https://api.github.com/users/EricClasson";

  const [profils, setProfils] = useState([]);
  useEffect(() => {
    // useEffect används för att hantera sidoeffekter

    fetch(baseurl) // Gör ett HTTP GET-anrop till den angivna URL:en
      .then((respin) => respin.json())
      // Hanterar svaret från servern genom att omvandla det till JSON-format
      .then((profils) => {
        setProfils(profils); // Uppdaterar komponentens state med den hämtade datan
      });
  }, []); // Tom array innebär att useEffect endast körs vid komponentens första rendering

  const [data, setData] = useState([]); //tom array till en början

  useEffect(() => {
    // useEffect används för att hantera sidoeffekter

    fetch(URL) // Gör ett HTTP GET-anrop till den angivna URL:en
      .then((resp) => resp.json())
      // Hanterar svaret från servern genom att omvandla det till JSON-format
      .then((data) => {
        const spliced = data.splice(0, 5);
        setData(spliced); // Uppdaterar komponentens state med den hämtade datan
      });
  }, []); // Tom array innebär att useEffect endast körs vid komponentens första rendering

  return (
    <div className="Apifetch-container">
      <div className="githubstats">
        <ul>
          <li>
            <h3>Public Repos</h3>
            <p>{profils.public_repos}</p>
          </li>
          <li>
            <h3>Followers</h3>
            <p>{profils.followers}</p>
          </li>
          <li>
            <h3>Following</h3>
            <p>{profils.following}</p>
          </li>
        </ul>
      </div>

      {data.map((repo) => (
        <article key={repo.id} className="api-content text-center">
          <a
            href={repo.html_url}
            target="_blank"
            className="btn-api text-center"
          >
            <h3>{repo.name.replace(/[-_]/g, " ")}</h3>
          </a>

          <p>{repo.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Apifetchcomponents;

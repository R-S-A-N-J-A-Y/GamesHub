import { useEffect, useState } from "react";

const SideBar = () => {
  const [Data, setData] = useState<
    { name: string; imageSrc: string; likes: number; genres: string[] }[]
  >([]);
  let genres: string[] = [];

  useEffect(() => {
    fetch("/Data/gameCard.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error Loading Genres: ", err.message));
  }, []);

  const getgenres = () => {
    let genreS: Set<string> = new Set();
    Data.forEach((d) => {
      d.genres.map((g) => {
        genreS.add(g);
      });
    });
    genres = Array.from(genreS);
  };

  getgenres();

  return (
    <nav className="navbar navbar-expand-lg mx-2 my-5 p-2">
      <div className="navbar-fluid">
        <ul className="navbar-nav nav">
          <li className="navbar-item">
            <a href="#" className="nav-link fs-4 fw-bolder m-0">
              Reviews
            </a>
          </li>
          <li className="navbar-item">
            <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
              New Releases
            </h1>
            <a href="#" className="nav-link" role="button">
              Last 30 Days
            </a>
            <a href="#" className="nav-link" role="button">
              This Week
            </a>
            <a href="#" className="nav-link" role="button">
              Next Week
            </a>
          </li>
          <li className="navbar-item">
            <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
              Generes
            </h1>
            {genres.map((g, index) => (
              <a key={index} href="#" className="nav-link" role="button">
                {" "}
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;

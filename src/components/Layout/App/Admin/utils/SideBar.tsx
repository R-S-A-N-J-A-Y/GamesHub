import { useState } from "react";
import getGenres from "../../../../../hooks/getGenres";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const NavbarAnchor = styled.a`
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(148, 145, 145, 0.3);
  }
`;

const LiHover = styled.li`
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(148, 145, 145, 0.3);
  }
`;

interface Props {
  onClick: (p: string) => void;
}

const SideBar = ({ onClick }: Props) => {
  const genres = getGenres();
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const handleGenresClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | string
  ) => {
    console.log(e);
    if (typeof e === "string") {
      onClick("clear");
      setSelectedGenre(null);
      return;
    }
    console.log("i");
    const genreI = e.currentTarget.getAttribute("data-key");
    if (genreI === null) return;

    const genreIndex = parseInt(genreI, 10);
    if (isNaN(genreIndex)) return;
    setSelectedGenre(genreIndex);
    onClick(genres[genreIndex].toLowerCase());
  };

  return (
    <div
      className="rounded-end-4 p-0 position-absolute w-100"
      style={{
        background: "white",
        right: "0",
      }}
    >
      <nav className="navbar navbar-expand-lg m-2 p-1">
        <div className="navbar-fluid">
          <ul className="navbar-nav nav d-flex gap-2 list-group">
            <li className="navbar-item w-100">
              <NavbarAnchor
                href="#"
                className="nav-link fs-4 fw-bolder ms-2 rounded-3"
              >
                Reviews
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100 border rounded-3 px-2 py-1">
              <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
                New Releases
              </h1>
              <NavbarAnchor
                href="#"
                className="nav-link rounded-3"
                role="button"
              >
                Last 30 Days
              </NavbarAnchor>
              <NavbarAnchor
                href="#"
                className="nav-link rounded-3"
                role="button"
              >
                This Week
              </NavbarAnchor>
              <NavbarAnchor
                href="#"
                className="nav-link rounded-3"
                role="button"
              >
                Next Week
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100 border rounded-3 px-2 py-1">
              <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
                Generes
              </h1>
              {genres.length > 0 ? (
                <ul className="list-group">
                  {genres.map((g, index) => (
                    <LiHover
                      key={index}
                      className={`list-group-item px-2 py-0 border-0 d-flex justify-content-between align-items-center rounded-3  
                      }`}
                      style={{
                        background:
                          selectedGenre === index
                            ? "rgba(148, 145, 145, 0.3)"
                            : "",
                      }}
                    >
                      <a
                        className={`nav-link ${
                          selectedGenre === index ? "" : "w-100"
                        }`}
                        href="#"
                        role="button"
                        data-key={index}
                        onClick={handleGenresClick}
                      >
                        <span>{g.charAt(0).toUpperCase() + g.slice(1)}</span>
                      </a>
                      {selectedGenre === index && (
                        <button
                          className="btn btn-sm p-0 m-0"
                          onClick={() => handleGenresClick("clear")}
                        >
                          <IoClose color="red" size={20} />
                        </button>
                      )}
                    </LiHover>
                  ))}
                </ul>
              ) : (
                <p> Error Loading the Genres... </p>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;

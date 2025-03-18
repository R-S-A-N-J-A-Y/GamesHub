import { useEffect } from "react";
import getGenres from "../../../../../../hooks/getGenres";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const LiHover = styled.li`
  transition: background-color 0.3s ease;
  &:hover {
    background: rgba(148, 145, 145, 0.3);
  }
`;

interface Props {
  onClick: (p: string) => void;
  genre: string;
}

const GenreSection = ({ onClick, genre }: Props) => {
  const genres = getGenres();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const genreFromUrl = searchParams.get("genre");
    if (genreFromUrl) {
      onClick(genreFromUrl.toLowerCase());
    } else {
      onClick("clear");
    }
  }, [searchParams]);

  const handleGenresClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const genre = e.currentTarget.getAttribute("data-key");
    if (genre === null) return;
    setSearchParams({ genre: genre });
  };

  return (
    <li className="navbar-item w-100 border rounded-3 px-2 py-1">
      <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
        Genres
      </h1>
      {genres.length > 0 ? (
        <ul className="list-group">
          {genres.map((g, index) => {
            const currGenre = g.toLowerCase();
            return (
              <LiHover
                key={index}
                className="list-group-item px-2 py-0 border-0 d-flex justify-content-between align-items-center rounded-3"
                style={{
                  background:
                    genre === currGenre ? "rgba(148, 145, 145, 0.3)" : "",
                }}
              >
                <a
                  className={`nav-link ${genre === currGenre ? "" : "w-100"}`}
                  href={`?genre=${g}`}
                  role="button"
                  data-key={g}
                  onClick={handleGenresClick}
                >
                  <span>{g}</span>
                </a>
                {genre === currGenre && (
                  <button
                    className="btn btn-sm p-0 m-0"
                    onClick={() => setSearchParams({})}
                  >
                    <IoClose color="red" size={20} />
                  </button>
                )}
              </LiHover>
            );
          })}
        </ul>
      ) : (
        <p> Error Loading the Genres... </p>
      )}
    </li>
  );
};

export default GenreSection;

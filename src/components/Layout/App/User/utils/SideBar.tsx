import { NavbarAnchor } from "../../Admin/utils/SideBar";
import GenreSection from "./SideBarUtils/GenreSection";

interface Props {
  setGenre: (p: string) => void;
  genre: string;
}

const SideBar = ({ setGenre, genre }: Props) => {
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
          <ul className="navbar-nav nav d-flex gap-2">
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
            <GenreSection setGenre={setGenre} genre={genre} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;

import { Props } from "../../../../App";
import HeaderApp from "./Container/HeaderApp";

const header = ({ onClick, userMode }: Props) => {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed top-0 start-0 end-0 p-1"
      style={{ zIndex: 1, height: "100px", background: "whitesmoke" }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center border  border-dark-subtle rounded-pill m-3 px-4 py-0"
        style={{ background: "transparent" }}
      >
        <div className="navbar">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>

        <div className="d-flex w-50">
          <input
            className="form-control me-2 rounded-pill px-3 py-2 m-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div className="navbar d-none d-lg-block px-2">
          <HeaderApp onClick={onClick} userMode={userMode} />
        </div>
      </div>
    </nav>
  );
};

export default header;

import getGenres from "../../../hooks/getGenres";
import styled from "styled-components";

const NavbarItem = styled.a`
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(148, 145, 145, 0.3);
  }
`;

const SideBar = () => {
  const genres = getGenres();

  return (
    <div
      className="col-lg-2 d-none d-lg-block rounded-end-4 p-0 position-fixed"
      style={{ background: "white" }}
    >
      <nav className="navbar navbar-expand-lg m-2 p-1">
        <div className="navbar-fluid">
          <ul className="navbar-nav nav d-flex gap-2">
            <li className="navbar-item w-100">
              <NavbarItem
                href="#"
                className="nav-link fs-4 fw-bolder ms-2 rounded-3"
              >
                Reviews
              </NavbarItem>
            </li>
            <li className="navbar-item w-100 border rounded-3 px-2 py-1">
              <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
                New Releases
              </h1>
              <NavbarItem href="#" className="nav-link rounded-3" role="button">
                Last 30 Days
              </NavbarItem>
              <NavbarItem href="#" className="nav-link rounded-3" role="button">
                This Week
              </NavbarItem>
              <NavbarItem href="#" className="nav-link rounded-3" role="button">
                Next Week
              </NavbarItem>
            </li>
            <li className="navbar-item w-100 border rounded-3 px-2 py-1">
              <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
                Generes
              </h1>
              {genres.length > 0 ? (
                genres.map((g, index) => (
                  <NavbarItem
                    key={index}
                    href="#"
                    className="nav-link rounded-3"
                    role="button"
                  >
                    {" "}
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </NavbarItem>
                ))
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

import styled from "styled-components";

const NavbarAnchor = styled.a`
  font-size: 20px;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(148, 145, 145, 0.3);
  }
`;

const Sidebar = () => {
  return (
    <div
      className="rounded-end-4 p-0 position-absolute w-100"
      style={{
        background: "white",
        right: "0",
      }}
    >
      <nav className="navbar navbar-expand-lg mx-0 p-2">
        <ul className="navbar-nav nav d-flex gap-2 p-2">
          <li className="navbar-item w-100 mb-3 border border-dark-subtle rounded-3">
            <NavbarAnchor
              href="/user/"
              className="nav-link rounded-3 fw-bolder "
            >
              Home
            </NavbarAnchor>
          </li>
          <ul className="navbar-nav nav d-flex gap-2 px-2 py-3  border border-dark-subtle rounded-3 ">
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3 ">
                Platforms
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Genres
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Stores
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Publisers
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Developers
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Review
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Tags
              </NavbarAnchor>
            </li>
            <li className="navbar-item w-100">
              <NavbarAnchor href="" className="nav-link rounded-3">
                Collections
              </NavbarAnchor>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

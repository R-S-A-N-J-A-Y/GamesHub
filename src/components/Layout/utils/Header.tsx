const header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed p-1"
      style={{
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: 1,
        height: "100px",
        background: "whitesmoke",
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center border  border-dark-subtle rounded-pill m-3 px-4 py-0"
        style={{
          background: "transparent",
        }}
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
          <ul className="navbar-nav w-100 d-flex justify-content-around fs-6 fw-bolder gap-3">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Game Updates
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default header;

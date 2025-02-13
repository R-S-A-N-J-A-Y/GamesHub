const header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed p-0"
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
        className="container-fluid d-flex justify-content-between align-items-center rounded-4 m-3 p-0"
        style={{
          background:
            "linear-gradient(202deg, rgba(255,164,204,1) 0%, rgba(98,170,255,1) 100%)",
        }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="navbar w-25 d-none d-lg-block">
          <ul className="navbar-nav mx-auto w-100 d-flex justify-content-around fs-6 fw-bolder fs-color">
            <li className="nav-item">
              <a href="#" className="nav-link" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" style={{ color: "white" }}>
                Games
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" style={{ color: "white" }}>
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex w-50">
          <input
            className="form-control me-2 rounded-pill px-3 m-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default header;

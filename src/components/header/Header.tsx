const header = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-black">
      <div className="container-fluid d-flex justify-content-between align-items-center border bg-info bg-opacity-10 border-info-subtle rounded-4">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="navbar w-25 d-none d-lg-block">
          <ul className="navbar-nav mx-auto w-100 d-flex justify-content-around">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
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

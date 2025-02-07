const SideBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-light mx-1 my-3 p-2">
      <div className="navbar-fluid">
        <ul className="navbar-nav nav">
          <li className="navbar-item">
            <a href="#" className="nav-link fs-4 fw-bolder" role="button">
              New Releases
            </a>
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
            <a href="#" className="nav-link fs-4 fw-bolder" role="button">
              Generes
            </a>
            <a href="#" className="nav-link" role="button">
              Action
            </a>
            <a href="#" className="nav-link" role="button">
              Horror
            </a>
            <a href="#" className="nav-link" role="button">
              Fantasy
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;

const SideBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-light mx-2 my-5 p-2">
      <div className="navbar-fluid">
        <ul className="navbar-nav nav">
          <li className="navbar-item">
            <a href="#" className="nav-link fs-4 fw-bolder m-0">
              Reviews
            </a>
          </li>
          <li className="navbar-item">
            <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
              New Releases
            </h1>
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
            <h1 className="nav-link fs-4 fw-bolder m-0" role="button">
              Generes
            </h1>
            <a href="#" className="nav-link" role="button">
              Action
            </a>
            <a href="#" className="nav-link" role="button">
              Horror
            </a>
            <a href="#" className="nav-link" role="button">
              Casual
            </a>
            <a href="#" className="nav-link" role="button">
              Strategy
            </a>
            <a href="#" className="nav-link" role="button">
              Shooter
            </a>
            <a href="#" className="nav-link" role="button">
              Simulaion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;

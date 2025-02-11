import getGenres from "../../../hooks/getGenres";

const SideBar = () => {
  const genres = getGenres();

  return (
    <nav className="navbar navbar-expand-lg mx-2 my-5 p-2">
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
            {genres.length > 0 ? (
              genres.map((g, index) => (
                <a key={index} href="#" className="nav-link" role="button">
                  {" "}
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </a>
              ))
            ) : (
              <p> Error Loading the Genres... </p>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;

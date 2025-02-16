const OrderByDropDown = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <ul className="navbar-nav fs-6 fw-bolder fs-color gap-5  border border-dark rounded-pill px-2">
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            id="platformsDropDown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Order By
          </a>
          <ul className="dropdown-menu p-2" aria-labelledby="platformsDropDown">
            <li>
              <a className="nav-link dropdown-item" href="#">
                Popularity
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-item" href="#">
                Name
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-item" href="#">
                Date
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-item" href="#">
                Release Date
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-item" href="#">
                Ratings
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-item" href="#">
                Clear
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default OrderByDropDown;

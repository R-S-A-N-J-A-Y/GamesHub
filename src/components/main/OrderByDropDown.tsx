const OrderByDropDown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle border border-black rounded-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order By
      </button>
      <ul className="dropdown-menu py-2 mt-2">
        <li>
          <a className="dropdown-item" href="#">
            Popularity
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Name
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Date
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Release Date
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Ratings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Clear
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OrderByDropDown;

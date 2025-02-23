const Admin = () => {
  return (
    <ul className="navbar-nav w-100 d-flex justify-content-around fs-6 fw-bolder gap-3">
      <li className="nav-item">
        <a href="#" className="nav-link">
          Game Updates
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className="nav-link"
          // onClick={() => onClick("Sign Up")}
        >
          Add Data
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className="nav-link"
          // onClick={() => onClick("Sign In")}
        >
          View
        </a>
      </li>
    </ul>
  );
};

export default Admin;

interface Props {
  onClick: (p: string) => void;
}

const NoUser = ({ onClick }: Props) => {
  return (
    <ul className="navbar-nav w-100 d-flex justify-content-around fs-6 fw-bolder gap-3">
      <li className="nav-item">
        <a href="#" className="nav-link">
          Game Updates
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link" onClick={() => onClick("Sign Up")}>
          Sign Up
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link" onClick={() => onClick("Sign In")}>
          Sign In
        </a>
      </li>
    </ul>
  );
};

export default NoUser;

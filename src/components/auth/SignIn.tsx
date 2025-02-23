import { useState } from "react";
import { Props } from "../../App";

const SignIn = ({ onClick }: Props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const OnSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <button
        className="btn btn-primary m-2 position-fixed end-0 top-0"
        onClick={() => onClick("Home")}
      >
        Home
      </button>

      <form className="col p-3 bg-dark-subtle m-5 p-5">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <button className="btn btn-primary p-2" onClick={OnSubmit}>
          Sign IN
        </button>
      </form>
    </>
  );
};

export default SignIn;

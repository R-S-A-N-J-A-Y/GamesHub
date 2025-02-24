import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(user);
  };

  return (
    <>
      <div className="m-5 p-3 d-flex gap-3">
        <div className="flex-grow-1">hi</div>
        <div className="p-3 flex-grow-1 d-flex flex-column gap-2 bg-dark">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label>Password</label>
          </div>
          <button
            className="mt-3 btn btn-primary align-self-start"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;

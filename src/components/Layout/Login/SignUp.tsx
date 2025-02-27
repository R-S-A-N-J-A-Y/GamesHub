import { useState } from "react";

import { IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  const [showP, setShowP] = useState(false);
  const [showCP, setShowCP] = useState(false);
  return (
    <div className="mx-3 my-5 p-5 d-flex p-3 gap-3">
      <div className="p-4 bg-dark flex-grow-1 rounded-3">
        <form className="d-flex flex-column gap-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <label> Name </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
            />
            <label> Email </label>
          </div>
          <div className="form-floating d-flex align-items-center bg-white rounded-3 justify-content-around mb-3 px-2">
            <input
              type={showCP ? "text" : "password"}
              className="form-control border-0"
              placeholder="name@example.com"
            />
            <button
              style={{ border: "none", background: "none" }}
              onClick={(e) => {
                e.preventDefault();
                setShowCP(!showCP);
              }}
            >
              {!showCP && <IoEyeOffOutline />}
              {showCP && <AiOutlineEye />}
            </button>
            <label> Password </label>
          </div>
          <div className="form-floating d-flex align-items-center bg-white rounded-3 justify-content-around mb-3 px-2">
            <input
              type={showP ? "text" : "password"}
              className="form-control border-0"
              placeholder="name@example.com"
            />
            <button
              style={{ border: "none", background: "none" }}
              onClick={(e) => {
                e.preventDefault();
                setShowP(!showP);
              }}
            >
              {!showP && <IoEyeOffOutline />}
              {showP && <AiOutlineEye />}
            </button>
            <label> Confirm Password </label>
          </div>
          <div className="form-floating d-flex align-items-center justify-start gap-3">
            <button
              className="p-2 btn btn-primary align-self-start fw-bold"
              type="submit"
            >
              Create Account
            </button>
            <p className="m-0 p-0 text-white">Already have an Account ?</p>
          </div>
        </form>
      </div>
      <div className="p-2 flex-grow-1">hi</div>
    </div>
  );
};

export default SignUp;

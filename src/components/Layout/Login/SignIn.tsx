import { useForm } from "react-hook-form";
import { useState } from "react";

import { IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidUser, setIsValidUser] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const handleLogin = (user: FormData) => {
    console.log(user);
    callBackend(user);
  };

  const callBackend = async (data: FormData) => {
    const endPoint = data.email === "admin" ? "login/admin" : "login";
    fetch(`http://localhost:3000/${endPoint}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 404) {
          setIsValidUser(true);
        } else {
          const data = await res.json();
          if (data.email === "admin") window.location.href = "./admin";
        }
      })
      .catch((err) => alert("Error Connecting to Backend: " + err.message));
  };

  return (
    <>
      <div className="m-5 p-3 d-flex gap-3">
        <div className="flex-grow-1">hi</div>
        <div className="p-4 bg-dark flex-grow-1 rounded-3">
          {isValidUser && (
            <div className="form-floating m-0 d-flex justify-content-center">
              <p className="mb-2 p-3 bg-danger text-white fw-bold rounded-3">
                Invalid Login, please try again
              </p>
            </div>
          )}
          <form
            className="d-flex flex-column gap-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email")}
              />
              <label>Email address</label>
            </div>
            <div className="form-floating d-flex align-items-center bg-white rounded-3 justify-content-around px-2">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...register("password")}
                style={{ border: "none" }}
              />
              <button
                style={{ border: "none", background: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                {!showPassword && <IoEyeOffOutline />}
                {showPassword && <AiOutlineEye />}
              </button>
              <label>Password</label>
            </div>
            <div className="form-floating d-flex align-items-center justify-start gap-4">
              <button
                type="submit"
                className=" btn btn-primary align-self-start"
              >
                Login
              </button>
              <a
                href="/signUp"
                className="m-0 p-0 text-white pe-auto link-underline link-underline-opacity-0"
              >
                Need to Create One ?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

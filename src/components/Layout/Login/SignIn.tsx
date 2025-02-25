import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
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
        <div className="p-3 flex-grow-1 d-flex flex-column gap-2 bg-dark">
          {isValidUser && (
            <div className="form-floating m-0 d-flex justify-content-center">
              <p className="mb-2 p-3 bg-danger text-white fw-bold rounded-3">
                Invalid Login, please try again
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email")}
              />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...register("password")}
              />
              <label>Password</label>
            </div>
            <button
              type="submit"
              className="mt-3 btn btn-primary align-self-start"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

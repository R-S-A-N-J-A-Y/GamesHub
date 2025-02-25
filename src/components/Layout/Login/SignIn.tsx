import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  email: z.union([
    z.string().email({ message: "Please Enter an Valid Email.." }),
    z.literal("admin"),
  ]),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters.." }),
});

type FormData = z.infer<typeof schema>;

const SignIn = () => {
  const [isValidUser, setIsValidUser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
            <div className="form-floating m-2 d-flex justify-content-center">
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
              {errors.email && (
                <p className="text-danger fs-bold m-2">
                  {errors.email.message}
                </p>
              )}
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
              {errors.password && (
                <p className="text-danger fs-bold m-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              disabled={!isValid}
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

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";

const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be atleast 3  Characters Long." }),
    email: z.string().email({ message: "Invalid Email Address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least of 6 Characters Long." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showP, setShowP] = useState(false);

  const onSubmit = (user: FormData) => {
    console.log(user);
    callBackend(user);
  };

  const callBackend = async (user: FormData) => {
    await fetch("http://localhost:3000/login/user/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status == 404) {
          alert("Email Already exists...");
        } else window.location.href = "./user";
      })
      .catch((err) => alert("Error Connecting to Backend: " + err.message));
  };

  return (
    <div className="mx-3 my-5 p-5 d-flex p-3 gap-3">
      <div className="p-4 bg-dark  flex-grow-1 rounded-3">
        <form
          className="d-flex flex-column gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-floating d-flex flex-column gap-3">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Username"
              {...register("name")}
            />
            <label> Name </label>
            {errors.name && (
              <p className="m-0 p-0 text-danger fw-bold">
                {" "}
                {errors.name.message}{" "}
              </p>
            )}
          </div>
          <div className="form-floating d-flex flex-column gap-2">
            <input
              type="text"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="name@example.com"
              {...register("email")}
            />
            <label> Email </label>
            {errors.email && (
              <p className="m-0 p-0 text-danger fw-bold">
                {" "}
                {errors.email.message}{" "}
              </p>
            )}
          </div>
          <div className="form-floating d-flex flex-column gap-2">
            <div className="form-floating d-flex align-items-center bg-white rounded-3 justify-content-around px-2">
              <input
                type={showP ? "text" : "password"}
                className={`form-control border-0 ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="password"
                {...register("password")}
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
              <label> Password </label>
            </div>
            {errors.password && (
              <p className="m-0 p-0 text-danger fw-bold">
                {" "}
                {errors.password.message}{" "}
              </p>
            )}
          </div>

          <div className="form-floating d-flex flex-column gap-2">
            <div className="form-floating d-flex align-items-center bg-white rounded-3 justify-content-around px-2">
              <input
                type={showP ? "text" : "password"}
                className={`form-control border-0 ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="CPassword"
                {...register("confirmPassword")}
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
            {errors.confirmPassword && (
              <p className="m-0 p-0 text-danger fw-bold">
                {" "}
                {errors.confirmPassword.message}{" "}
              </p>
            )}
          </div>

          <div className="form-floating d-flex align-items-center justify-start gap-4">
            <button
              className="p-2 btn btn-primary align-self-start fw-bold"
              type="submit"
            >
              Create Account
            </button>
            <a
              href="/signIn"
              className="m-0 p-0 text-white pe-auto link-underline link-underline-opacity-0"
            >
              Already have an Account ?
            </a>
          </div>
        </form>
      </div>
      <div className="p-2 flex-grow-1">hi</div>
    </div>
  );
};

export default SignUp;

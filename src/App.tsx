import { useState } from "react";
import AppLayout from "./components/Layout/AppLayout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

export interface Props {
  onClick: (p: string) => void;
  userMode: string;
}

function App() {
  const [Login, setLogin] = useState("Home");
  const [mode, setMode] = useState("");

  // Handling User Login Mode
  const handleMode = (mod: string) => {
    setLogin("Home");
    if (mod === "admin") setMode("admin");
    else if (mod === "user") setMode("user");
    else setMode("");
  };

  // Dynamic Rendering Based on the Login Data
  if (Login === "Home")
    return <AppLayout onClick={(s) => setLogin(s)} userMode={mode} />;
  else if (Login === "Sign In")
    return <SignIn onClick={(s) => setLogin(s)} userMode={handleMode} />;
  return <SignUp onClick={(s) => setLogin(s)} />;
}

export default App;

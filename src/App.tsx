import { useState } from "react";
import AppLayout from "./components/Layout/AppLayout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

export interface Props {
  onClick: (p: string) => void;
}

function App() {
  const [Login, setLogin] = useState("Home");
  const [isAdmin, setAdmin] = useState(false);

  if (Login === "Home") return <AppLayout onClick={(s) => setLogin(s)} />;
  else if (Login === "Sign In")
    return (
      <SignIn
        onClick={(s) => setLogin(s)}
        userMode={(mod: string) => {
          if (mod === "admin") setAdmin(true);
          else setAdmin(false);
        }}
      />
    );
  return <SignUp onClick={(s) => setLogin(s)} />;
}

export default App;

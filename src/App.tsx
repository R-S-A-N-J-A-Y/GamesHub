import { useState } from "react";
import AppLayout from "./components/Layout/AppLayout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

export interface Props {
  onClick: (p: string) => void;
}

function App() {
  const [Login, setLogin] = useState("");

  return (
    <div>
      {!Login && <AppLayout onClick={(s) => setLogin(s)} />}
      {Login && Login === "Sign In" ? (
        <SignIn onClick={() => setLogin("")} />
      ) : (
        <SignUp onClick={() => setLogin("")} />
      )}
    </div>
  );
}

export default App;

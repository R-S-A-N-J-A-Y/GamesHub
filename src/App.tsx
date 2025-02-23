import { useState } from "react";
import AppLayout from "./components/Layout/AppLayout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  const [Login, setLogin] = useState("");

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      {!Login && <AppLayout onClick={(s) => setLogin(s)} />}
      {Login && Login === "Sign In" ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/App/AppLayout";
import SignUp from "./components/Layout/Login/SignUp";
import SignIn from "./components/Layout/Login/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/admin" element={<></>} />
      <Route path="/user" element={<></>} />
    </Routes>
  );
}

export default App;

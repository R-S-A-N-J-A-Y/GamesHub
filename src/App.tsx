import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/App/AppLayout";
import SignUp from "./components/Layout/Login/SignUp";
import SignIn from "./components/Layout/Login/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout mode="" />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/admin/*" element={<AppLayout mode="admin" />} />
      <Route path="/user" element={<AppLayout mode="user" />} />
    </Routes>
  );
}

export default App;

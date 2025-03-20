import { Routes, Route } from "react-router-dom";
import UserAppLayout from "./utils/UserAppLayout";
import ExploreController from "./utils/Explore/ExploreController";

const UserController = () => {
  return (
    <Routes>
      <Route path="/" element={<UserAppLayout />} />
      <Route path="/editdb/" element={<ExploreController />} />
    </Routes>
  );
};

export default UserController;

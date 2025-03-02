import { Routes, Route } from "react-router-dom";
import EditDBLayout from "./EditDB/EditDBLayout";
import EditUser from "./EditDB/EditUser";
import EditGames from "./EditDB/EditGames";

const EditDB = () => {
  return (
    <Routes>
      <Route path="/" element={<EditDBLayout />} />
      <Route path="/users/*" element={<EditUser />} />
      <Route path="/games/*" element={<EditGames />} />
    </Routes>
  );
};

export default EditDB;

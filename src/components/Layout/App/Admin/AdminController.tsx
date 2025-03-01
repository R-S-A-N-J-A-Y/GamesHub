import { Route, Routes } from "react-router-dom";
import AdminAppLayout from "./utils/AdminAppLayout";
import EditDB from "./utils/EditDB";

const AdminController = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminAppLayout />} />
      <Route path="/editdb" element={<EditDB />} />
    </Routes>
  );
};

export default AdminController;

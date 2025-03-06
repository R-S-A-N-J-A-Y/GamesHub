import { Route, Routes } from "react-router-dom";
import AdminAppLayout from "./utils/AdminAppLayout";
import EditDBLayout from "./utils/EditDB/EditDBLayout";

const AdminController = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminAppLayout />} />
      <Route path="/editdb/*" element={<EditDBLayout />} />
    </Routes>
  );
};

export default AdminController;

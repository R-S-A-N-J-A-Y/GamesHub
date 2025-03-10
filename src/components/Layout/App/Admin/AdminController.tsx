import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AdminAppLayout = lazy(() => import("./utils/AdminAppLayout"));
const EditDBLayout = lazy(() => import("./utils/EditDB/EditDBLayout"));

const AdminController = () => {
  return (
    <Suspense fallback={<div>Loading Data...</div>}>
      <Routes>
        <Route path="/" element={<AdminAppLayout />} />
        <Route path="/editdb/" element={<EditDBLayout />} />
      </Routes>
    </Suspense>
  );
};

export default AdminController;

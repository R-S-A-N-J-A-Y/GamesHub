import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const NUserAppLayout = lazy(() => import("./NonUser/NUserAppLayout"));
const UserController = lazy(() => import("./User/UserController"));
const AdminController = lazy(() => import("./Admin/AdminController"));

const AppLayout = () => {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
        <Route path="/" element={<NUserAppLayout />}></Route>
        <Route path="/admin/*" element={<AdminController />}></Route>
        <Route path="/user/*" element={<UserController />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppLayout;

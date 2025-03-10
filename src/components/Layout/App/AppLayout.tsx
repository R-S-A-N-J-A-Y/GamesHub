import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const NUserAppLayout = lazy(() => import("./NonUser/NUserAppLayout"));
const UserAppLayout = lazy(() => import("./User/UserAppLayout"));
const AdminController = lazy(() => import("./Admin/AdminController"));

const AppLayout = () => {
  return (
    <Suspense fallback={<div>Loading Data...</div>}>
      <Routes>
        <Route path="/" element={<NUserAppLayout />}></Route>
        <Route path="/admin/*" element={<AdminController />}></Route>
        <Route path="/user" element={<UserAppLayout />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppLayout;

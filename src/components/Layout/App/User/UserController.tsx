import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const UserAppLayout = lazy(() => import("./utils/Home/UserAppLayout"));
const ExploreAppLayout = lazy(() => import("./utils/Explore/ExploreAppLayout"));

const UserController = () => {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
        <Route path="/" element={<UserAppLayout />} />
        <Route path="/explore/" element={<ExploreAppLayout />} />
      </Routes>
    </Suspense>
  );
};

export default UserController;

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const UserAppLayout = lazy(() => import("./utils/UserAppLayout"));
const ExploreController = lazy(
  () => import("./utils/Explore/ExploreController")
);

const UserController = () => {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
        <Route path="/" element={<UserAppLayout />} />
        <Route path="/explore/" element={<ExploreController />} />
      </Routes>
    </Suspense>
  );
};

export default UserController;

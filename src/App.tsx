import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppLayout = lazy(() => import("./components/Layout/App/AppLayout"));
const SignUp = lazy(() => import("./components/Layout/Login/SignUp"));
const SignIn = lazy(() => import("./components/Layout/Login/SignIn"));

function App() {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
        <Route path="/*" element={<AppLayout />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../Components/hoc/RequireAuth";
import DeashboardPage from "./DeashboardPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DeashboardPage />
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoute;

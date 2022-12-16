import React from "react";
import { Route, Routes } from "react-router-dom";
import Company from "./Company";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/dashboard/company" element={<Company />}></Route>
    </Routes>
  );
};

export default AllRoute;

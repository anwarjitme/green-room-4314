import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
};

export default AllRoute;

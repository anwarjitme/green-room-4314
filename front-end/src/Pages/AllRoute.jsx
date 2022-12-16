import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactHome } from "./ContactHome";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/contact" element={<ContactHome />}></Route>
    </Routes>
  );
};

export default AllRoute;

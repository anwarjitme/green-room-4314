import React from "react";
import { Route, Routes } from "react-router-dom";
import Hnavbar from "./Hnavbar";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
       
       <Route  path="/" element={<Hnavbar/>}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>

    </Routes>
  );
};

export default AllRoute;

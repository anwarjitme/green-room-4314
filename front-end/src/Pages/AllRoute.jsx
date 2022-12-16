import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactHome } from "./ContactHome";
import Hnavbar from "./Hnavbar";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Single_contact from "./single_contact";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
       <Route  path="/" element={<Hnavbar/>}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/contact" element={<ContactHome />}></Route>
      <Route path="/single_contact" element={<Single_contact/>} ></Route>
    </Routes>
  );
};

export default AllRoute;

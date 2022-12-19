import React from "react";
import { Route, Routes } from "react-router-dom";
import Company from "./Company";
import RequireAuth from "../Components/hoc/RequireAuth";
import DeashboardPage from "./DeashboardPage";
import { ContactHome } from "./ContactHome";
import Hnavbar from "./Hnavbar";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Single_contact from "./single_contact";

const AllRoute = () => {
  return (
    // <div>AllRoute</div>
    <Routes>
      <Route path="/" element={<Hnavbar />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/dashboard/company"
        element={
          <RequireAuth>
            <Company />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DeashboardPage />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/dashboard/contact"
        element={
          <RequireAuth>
            <ContactHome />
          </RequireAuth>
        }
      ></Route>
      <Route path="/dashboard/contact/:id" element={<Single_contact />}></Route>
    </Routes>
  );
};
export default AllRoute;

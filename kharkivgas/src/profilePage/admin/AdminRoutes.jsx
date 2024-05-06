import React from "react";
import AdminProfile from "./AdminProfile";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="main" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;

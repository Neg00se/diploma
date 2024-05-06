import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserLayout from "./UserLayout";
import PaymentHistory from "./userHistory/PaymentHistory";
import ConsumeChart from "./gasConsume/ConsumeChart";
import UserData from "./userData/UserData";
import Settings from "./settings/Settings";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="history" element={<PaymentHistory />} />
        <Route path="main" element={<UserProfile />} />
        <Route path="consume" element={<ConsumeChart />} />
        <Route path="info" element={<UserData />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;

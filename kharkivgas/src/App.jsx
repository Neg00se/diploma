import React from "react";
import Mainlogin from "./loginPage/Mainlogin";
import WelcomePage from "./welcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
import ProfileMainPage from "./profilePage/ProfileMainPage";
import Layout from "./components/Layout";
import RequireAuth from "./features/auth/RequireAuth";

import Mainreg from "./registrationpage/Mainreg";

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<Mainlogin />} />
        <Route path="register" element={<Mainreg />} />
        {/* Authorized user */}
        <Route element={<RequireAuth />}>
          <Route path="profile/*" element={<ProfileMainPage />} />
        </Route>
        {/* Authorized admin */}
        {/* <Route path="admin" /> */}
      </Route>
    </Routes>
  );
};

export default App;

import React from "react";
import { useGetProfileQuery } from "../features/userProfile/userProfileApiSlice";
import AdminProfile from "./admin/AdminProfile";
import UserRoutes from "./user/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";

const ProfileMainPage = () => {
  const { role, isLoading } = useGetProfileQuery("getProfile", {
    selectFromResult: ({ data }) => ({
      role: data?.roleName,
    }),
  });

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  localStorage.setItem("residents", getRandomInt(2, 5));
  localStorage.setItem("area", getRandomInt(50, 100));

  const page = isLoading ? (
    <p>loading...</p>
  ) : role === "Admin" ? (
    <AdminRoutes />
  ) : (
    <UserRoutes />
  );

  return page;
};

export default ProfileMainPage;

import React from "react";
import LoginMainContent from "./loginMainContent/LoginMainContent";
import "./mainlogin.css";
import { apiSlice } from "../app/api/apiSlice";
import { useDispatch } from "react-redux";
export default function Mainlogin() {
  const dispatch = useDispatch();
  dispatch(apiSlice.util.resetApiState());
  return (
    <>
      <LoginMainContent />
    </>
  );
}

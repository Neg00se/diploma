import React from "react";
import UserHeader from "./components/UserHeader";
import UserSidebar from "./components/UserSidebar";
import { Outlet } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useGetCommunalsQuery } from "../../features/communals/communalsApiSlice";

const UserLayout = () => {
  const { data } = useGetCommunalsQuery("getCommunals");
  return (
    <>
      <UserHeader />

      <Row className="g-0 fullPage">
        <Col lg={2}>
          <UserSidebar />
        </Col>
        <Col lg={10} className="pe-0 bg-warning bg-opacity-10 ">
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default UserLayout;

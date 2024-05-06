import React from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />

      <Row className="g-0 fullPage">
        <Col lg={2}>
          <AdminSidebar />
        </Col>
        <Col lg={10} className="pe-0 bg-warning bg-opacity-10 ">
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default AdminLayout;

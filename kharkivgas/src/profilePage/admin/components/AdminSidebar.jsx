import React from "react";
import "./sidebar.css";
import { Col, NavLink } from "react-bootstrap";

const AdminSidebar = () => {
  return (
    <Col className="g-1 shadow-sm d-flex flex-column h-100 flex-shrink-0 p-3 bg-body-tertiary">
      <ul className="nav nav-pills flex-column mb-auto my-2">
        <li className="nav-item">
          <NavLink
            to={"/profile/main"}
            className="nav-link active"
            aria-current="page"
          >
            Головна
          </NavLink>
        </li>
      </ul>
    </Col>
  );
};

export default AdminSidebar;

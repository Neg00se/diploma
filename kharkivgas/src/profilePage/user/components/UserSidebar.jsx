import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <Col className="g-1 shadow-sm d-flex flex-column h-100 flex-shrink-0 p-3 bg-body-tertiary">
      <ul className="nav nav-pills flex-column mb-auto my-2">
        <li className="nav-item">
          <NavLink
            to={"/profile/main"}
            className="nav-link"
            aria-current="page"
          >
            Головна
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/profile/history"} className="nav-link ">
            Історія розрахунків
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/profile/consume"} className="nav-link ">
            Споживання газу
          </NavLink>
        </li>
        <h5 className="my-2 fw-semibold text-body-tertiary">Мої дані</h5>
        <li className="nav-item">
          <NavLink to={"/profile/info"} className="nav-link ">
            Профіль
          </NavLink>
        </li>
        <li>
          <NavLink to={"/profile/settings"} className="nav-link ">
            Налаштування
          </NavLink>
        </li>
      </ul>
    </Col>
  );
};

export default UserSidebar;

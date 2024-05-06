import React from "react";
import logo from "../../../assets/logo.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useGetProfileQuery } from "../../../features/userProfile/userProfileApiSlice";
import { logOut } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
  const { data } = useGetProfileQuery("getProfile");
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Navbar.Brand className="align-middle text-center text-uppercase">
        {" "}
        <img
          src={logo}
          width="80"
          height="auto"
          className="d-inline-block "
        />{" "}
        Kharkiv gas
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Navbar.Text className="text-white me-auto fs-3">
              Welcome to admin page , {data.firstName} {data.lastName}
            </Navbar.Text>
          </Nav>

          <Nav>
            <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;

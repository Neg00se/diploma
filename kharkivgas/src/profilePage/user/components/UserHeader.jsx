import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import {
  Nav,
  Navbar,
  Container,
  Button,
  Col,
  Row,
  Modal,
} from "react-bootstrap";
import {
  useToPayQuery,
  useUserPlanQuery,
} from "../../../features/userProfile/userProfileApiSlice";
import { logOut } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import PayModal from "./PayModal";
import AddCommunalModal from "./AddCommunalModal";

const UserHeader = () => {
  const { data } = useToPayQuery();
  const { data: tariff, isLoading } = useUserPlanQuery();
  const dispatch = useDispatch();
  const [showPay, setShowPay] = useState(false);
  const [showCommunal, setShowCommunal] = useState(false);

  const handleClosePay = () => setShowPay(false);
  const handleShowPay = () => setShowPay(true);
  const handleCloseCommunal = () => setShowCommunal(false);
  const handleShowCommunal = () => setShowCommunal(true);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      className="bg-body-tertiary shadow"
      expand="lg"
    >
      <Navbar.Brand className="align-middle text-center text-uppercase col-lg-2">
        {" "}
        <img
          src={logo}
          width="80"
          height="auto"
          className="d-inline-block "
        />{" "}
        Kharkiv gas
      </Navbar.Brand>
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Col className="ms-2 ms-lg-5 mx-md-auto mx-xxl-0 col-12 col-md-8 col-lg-6">
            <Row className=" gx-2">
              <Col className="col-6 col-lg-3">
                <Button onClick={handleShowPay} className="w-100 py-2">
                  Оплатити
                </Button>

                <PayModal show={showPay} handleClose={handleClosePay} />
              </Col>
              <Col className="col-6 col-lg-4">
                <Button
                  onClick={handleShowCommunal}
                  variant="outline-primary"
                  className="w-100 py-2 "
                >
                  Внести показники
                </Button>
                <AddCommunalModal
                  show={showCommunal}
                  handleClose={handleCloseCommunal}
                />
              </Col>
            </Row>
          </Col>
          <Col className="mx-auto col-5">
            <Row>
              <Col className="text-center">
                <p className="fw-semibold m-0">{tariff?.name}</p>
                <small className="text-secondary">ваш тарифний план</small>
              </Col>
              <Col className="text-center">
                <p className="m-0 fw-semibold">{tariff?.price} грн</p>
                <small className="text-secondary">ціна тарифу</small>
              </Col>
              <Col className="text-center">
                <p className="m-0 fw-semibold">{data} грн</p>
                <small className="text-secondary">до сплати</small>
              </Col>
            </Row>
          </Col>
          <Col className="col-1">
            <Nav className=" mx-auto">
              <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserHeader;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";
import Contacts from "./Contacts";

const UserData = () => {
  return (
    <Container className="mt-4 px-4">
      <Row className="gx-3 ">
        <Col className="">
          <PersonalInfo />
        </Col>
        <Col>
          <Contacts />
        </Col>
      </Row>
    </Container>
  );
};

export default UserData;

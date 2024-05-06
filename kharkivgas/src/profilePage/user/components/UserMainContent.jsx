import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyDataComponent from "./MyDataComponent";
import MyConditionsComponent from "./MyConditionsComponent";
import ReceiptComponent from "./ReceiptComponent";
import PayComponent from "./PayComponent";

const UserMainContent = () => {
  return (
    <Container className="mt-4">
      <Row className=" g-1">
        <Col xs={12} md={6} className="p-md-3 pt-md-0">
          <Row className="row-cols-1 gy-2 gx-3">
            <MyConditionsComponent />
            <MyDataComponent />
          </Row>
        </Col>
        <Col xs={12} md={6} className="p-md-3 pt-md-0">
          <Row className="row-cols-1 h-100 gy-0">
            <ReceiptComponent />
            <PayComponent />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMainContent;

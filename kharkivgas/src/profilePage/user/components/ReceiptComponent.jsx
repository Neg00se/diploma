import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useToPayQuery } from "../../../features/userProfile/userProfileApiSlice";

const ReceiptComponent = () => {
  const { data } = useToPayQuery();

  return (
    <Col className="border rounded shadow-sm  bg-white">
      <Container>
        <Row className="mt-4 mb-2">
          <Col>
            <h5 className="fw-semibold">Стан рахунку</h5>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center">
            <p className="m-0">Сума до сплати (грн)</p>
          </Col>
          <Col>
            <p className="fs-3 fw-bold text-danger text-opacity-75  m-0 text-end">
              {data} грн
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default ReceiptComponent;

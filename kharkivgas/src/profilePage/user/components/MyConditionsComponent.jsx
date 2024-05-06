import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useUserPlanQuery } from "../../../features/userProfile/userProfileApiSlice";

const MyConditionsComponent = () => {
  const { data } = useUserPlanQuery();

  return (
    <Col className="border rounded shadow-sm  bg-white">
      <Container>
        <Row className="mt-4 mb-2">
          <Col>
            <h5 className="fw-semibold">Мої умови</h5>
            <h6 className="mb-2 mt-3 fw-semibold">Тарифний план</h6>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0">
            <p className="">Тарифний план</p>
            <p>Ціна за 1 куб.м , грн</p>
            <p>Знижка</p>
          </Col>
          <Col>
            <p>{data.name}</p>
            <p>{data.price} грн</p>
            <p>Не надається</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default MyConditionsComponent;

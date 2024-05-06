import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useToPayQuery,
  usePayMoneyMutation,
} from "../../../features/userProfile/userProfileApiSlice";

const PayComponent = () => {
  const { data } = useToPayQuery();
  const [pay, setPay] = useState(Number(data));
  const [error, setError] = useState("");
  const [payMoney, { isSuccess }] = usePayMoneyMutation();

  const handlePay = (value) => {
    if (value < 0) {
      setPay(0);
    }
    if (value > data) {
      setPay(data);
    } else {
      setPay(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await payMoney({ money: pay });
    } catch (error) {
      setError("payment failed");
    }
  };

  return (
    <Col className="border rounded shadow-sm  bg-white mt-2">
      <Container>
        <Row className="mt-4 mb-2">
          <Col>
            <h5 className="fw-semibold">Оплата за газ</h5>
          </Col>
        </Row>
        <Col>
          <p
            className={error ? "text-danger" : "ivisible"}
            aria-live="assertive"
          >
            {error}
          </p>
          <Form className="mt-4">
            <Row>
              <Col>
                <Form.Label>Сума оплати</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  step={0.1}
                  value={pay}
                  onChange={(e) => handlePay(Number(e.target.value))}
                />
              </Col>
              <Col>
                <Form.Label>Платіжна система</Form.Label>
                <Form.Select>
                  <option>PayPall</option>
                  <option>EasyPay</option>
                  <option>Visa</option>
                  <option>Master card</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={6} sm={8} className="mx-auto">
                <Button onClick={handleSubmit} className="w-100 ">
                  Оплатити
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Container>
    </Col>
  );
};

export default PayComponent;

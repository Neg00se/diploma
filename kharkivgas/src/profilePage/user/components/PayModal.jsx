import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {
  usePayMoneyMutation,
  useToPayQuery,
} from "../../../features/userProfile/userProfileApiSlice";

const PayModal = ({ show, handleClose }) => {
  const { data, isSuccess } = useToPayQuery();
  const [pay, setPay] = useState(isSuccess ? data : 0);
  const [payMoney] = usePayMoneyMutation();
  const [error, setError] = useState("");

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
      setError("payment  failed");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-semibold">Оплата за газ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        <Form className="mt-4" id="payForm">
          <Row>
            <p
              className={error ? "text-danger" : "ivisible"}
              aria-live="assertive"
            >
              {error}
            </p>
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
            <Col md={6} sm={8} className="mx-auto"></Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer as={Row} className="m-0">
        <Col className="col-5 mx-auto">
          <Button className="w-100" variant="danger" onClick={handleClose}>
            Закрити
          </Button>
        </Col>
        <Col className="col-5 mx-auto">
          <Button onClick={handleSubmit} form="payForm" className="w-100 ">
            Сплатити
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

export default PayModal;

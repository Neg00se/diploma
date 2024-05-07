import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { useAddCommunalMutation } from "../../../features/communals/communalsApiSlice";
import dayjs from "dayjs";

const AddCommunalModal = ({ show, handleClose }) => {
  const [gas, setGas] = useState(0);
  const [month, setMonth] = useState(dayjs());
  const [addComm, { error }] = useAddCommunalMutation();
  const [err, setErr] = useState();

  const handleGas = (value) => {
    if (value < 0 || NaN) {
      setGas(0);
    }
    if (value > 200) {
      setGas(200);
    } else {
      setGas(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let start = month.startOf("M").format("YYYY-MM-DD");
    let end = month.endOf("M").format("YYYY-MM-DD");

    try {
      await addComm({ gasUsed: gas, startDate: start, endDate: end });
      setGas(0);
    } catch (err) {
      if (!err?.status) {
        setErr("No server response");
      } else if (err.status === 400) {
        setErr("Показники для цього місяця вже існують");
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-semibold">Внесення показників</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p className={error ? "text-danger" : "invisible"}>
              Щось пішло не так
            </p>
            <Row>
              <Form.Group as={Col}>
                <Form.Label className="fs-5">
                  Введіть об'єм використаного газу, м3
                </Form.Label>
                <Form.Control
                  value={gas}
                  onChange={(e) => handleGas(Number(e.target.value))}
                  as={TextField}
                  type="number"
                  min={0}
                  step={0.01}
                  size="lg"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="fs-5 ">Оберіть місяць</Form.Label>
                <DatePicker
                  minDate={dayjs().year(2024).month(3)}
                  value={month}
                  className="col-12"
                  views={["month", "year"]}
                  onChange={(newValue) => setMonth(newValue)}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрити
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Надіслати
          </Button>
        </Modal.Footer>
      </Modal>
    </LocalizationProvider>
  );
};

export default AddCommunalModal;

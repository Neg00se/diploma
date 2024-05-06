import React, { useState } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import { useGetProfileQuery } from "../../../features/userProfile/userProfileApiSlice";
import { MdModeEdit } from "react-icons/md";
import { useChangePhoneMutation } from "../../../features/userProfile/userProfileApiSlice";

const Contacts = () => {
  const { contacts } = useGetProfileQuery("getProfile", {
    selectFromResult: ({ data }) => ({
      contacts: { email: data.email, phone: data.phoneNumber },
    }),
  });

  const [changePhone] = useChangePhoneMutation();
  const [phone, setPhone] = useState(contacts.phone);
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePhone(phone);
      setEditable(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePhoneInput = (e) => setPhone(e.target.value);

  return (
    <Col className="border rounded shadow-sm  bg-white h-100 pb-3">
      <Container>
        <Row className="mt-4 mb-2">
          <Col>
            <h5 className="fw-semibold">Контакти</h5>
          </Col>
        </Row>
        <Row>
          <Col className="col-4">
            <p className="my-5 fw-semibold">Мобільний телефон</p>
            <p className="my-5 fw-semibold">E-mail</p>
          </Col>
          <Col className="col-5">
            <p className={editable ? "d-none" : "my-5"}>{contacts.phone}</p>
            <FormControl
              style={{ height: 24 }}
              value={phone}
              onChange={handlePhoneInput}
              className={editable ? "my-5 px-0" : "d-none"}
            />
            <p className="my-5 ">{contacts.email}</p>
          </Col>
          <Col className="col-3">
            <MdModeEdit
              onClick={handleEdit}
              className={editable ? "d-none" : "w-75 h-50 btn"}
            />
            <Button
              className={
                editable ? "w-75 h-50 mx-auto my-auto btn-success" : "d-none"
              }
              onClick={handleSubmit}
            >
              Зберегти
            </Button>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Contacts;

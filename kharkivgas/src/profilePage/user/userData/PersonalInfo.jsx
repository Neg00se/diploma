import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useGetProfileQuery } from "../../../features/userProfile/userProfileApiSlice";

const PersonalInfo = () => {
  const { data: profile, isLoading } = useGetProfileQuery("getProfile");

  return (
    <Col className="border rounded shadow-sm  bg-white pb-3">
      <Container>
        <Row className="mt-4 mb-2">
          <Col>
            <h5 className="fw-semibold">Профіль</h5>
          </Col>
        </Row>
        <Row>
          <Col className=" col-4">
            <p className="my-2 fw-semibold">Прізвище</p>
            <p className="my-2 fw-semibold">Ім'я</p>
          </Col>
          <Col className="co-8">
            <p className="my-2 ">{profile.lastName}</p>
            <p className="my-2 "> {profile.firstName}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="col-4">
            <p className="my-2 fw-semibold">Особовий рахунок</p>
          </Col>
          <Col className="col-8">
            <p className="my-2 ">{profile.personalCode}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="col-4">
            <p className="my-2 fw-semibold">Повна Адреса</p>
          </Col>
          <Col className="col-8">
            <p className="my-2 ">{profile.address}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="col-4">
            <p className="my-2 fw-semibold">Група споживання</p>
          </Col>
          <Col className="col-8">
            <p className="my-2 ">
              Абоненти що використовують газ для комплексного споживання
              (індивідуальне опалення та приготування та/або підігрів води) з
              опалювальною площею від 50 до 100 м.кв включно
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="col-4">
            <p className="my-2 fw-semibold">Кількість Зареєстрованих осіб</p>
          </Col>
          <Col className="col-8">
            <p className="my-2 ">{localStorage.getItem("residents")}</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-4">
            <p className="my-2 fw-semibold">Опалювальна площа м2</p>
          </Col>
          <Col className="col-8">
            <p className="my-2 ">{localStorage.getItem("area")}</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default PersonalInfo;

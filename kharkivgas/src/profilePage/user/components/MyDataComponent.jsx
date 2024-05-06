import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useGetProfileQuery } from "../../../features/userProfile/userProfileApiSlice";

const MyDataComponent = () => {
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProfileQuery("getProfile");

  let content;
  if (isLoading) {
    content = (
      <div className="spinner d-flex justify-content-center align-items-center">
        <h1>Loading &nbsp;</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        {" "}
        <Row className="mt-4 mb-2">
          <Col>
            <h5 className="fw-semibold">Мої Дані</h5>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0">
            <p>Власник особового рахунку</p>
            <p>Особовий рахунок</p>
            <hr />
            <p>Адреса</p>
          </Col>
          <Col>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.personalCode}</p>
            <hr />
            <p>{user.address}</p>
          </Col>
        </Row>
      </>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Col className="border rounded shadow-sm  bg-white">
      <Container>{content}</Container>
    </Col>
  );
};

export default MyDataComponent;

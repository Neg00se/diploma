import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../../features/auth/authSlice";
import { useChangeCredsMutation } from "../../../features/userProfile/userProfileApiSlice";
import { MdModeEdit } from "react-icons/md";
import validator from "validator";

const Settings = () => {
  const data = useSelector((state) => state.auth);
  const [readonly, setReadonly] = useState(true);
  const [email, setEmail] = useState(data.user);
  const [password, setPassword] = useState(data.pwd);
  const [errShow, setErrShow] = useState(false);

  const [changeCreds, { isSuccess }] = useChangeCredsMutation();

  const dispatch = useDispatch();

  const handleEdit = () => {
    setReadonly(false);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changeCreds({
        email: email,
        oldPassword: data.pwd,
        newPassword: password,
      });
      console.log(data.acessToken);

      dispatch(setCredentials({ ...data, user: email, pwd: password }));

      setReadonly(true);
    } catch (error) {}
  };

  const validate = (value) => {
    setPassword(value);
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrShow(false);
    } else {
      setErrShow(true);
    }
  };

  return (
    <Container className="mt-4 px-4 ">
      <Row className="gx-2">
        <Col className="border px-3 bg-white shadow-sm rounded ">
          <Row className="mt-4 mb-2">
            <Col>
              <h5 className="fw-semibold">Параметри авторизації</h5>
            </Col>
          </Row>
          <Form as={Col}>
            <Row>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={2}>
                    Логін
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      value={email}
                      onChange={handleEmailInput}
                      className="p-2"
                      type="email"
                      placeholder="Email"
                      readOnly={readonly}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column sm={2}>
                    Пароль
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      readOnly={readonly}
                      value={password}
                      onChange={(e) => validate(e.target.value)}
                      className="p-2 w-100"
                      type="password"
                      placeholder="Password"
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col sm={2} className="mb-3 d-flex">
                <MdModeEdit
                  className={
                    readonly
                      ? "w-50 h-50 my-auto mx-auto pe-auto btn"
                      : "d-none"
                  }
                  onClick={handleEdit}
                >
                  Edit
                </MdModeEdit>
                <Button
                  onClick={handleSubmit}
                  className={
                    readonly
                      ? "d-none"
                      : "w-50 h-50 mx-auto my-auto btn-success"
                  }
                >
                  Зберегти
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-10">
                <Col className="col-10 offset-2">
                  {!readonly && errShow ? (
                    <Alert variant="danger">
                      Пароль повинен бути довжиною щонайменше 6 символів ,
                      складатися з літер латинського алфавіту , мати мінімум 1
                      велику літеру , 1 маленьку літеру, 1 цифру та 1 символ
                    </Alert>
                  ) : (
                    <></>
                  )}
                </Col>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;

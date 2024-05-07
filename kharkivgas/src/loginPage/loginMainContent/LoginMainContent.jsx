import React from "react";
import "./loginmaincontent.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import banner from "../loginImages/login-image.png";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { Container, Spinner } from "react-bootstrap";

const LoginMainContent = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email: user, password: pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user, pwd }));
      setUser("");
      setPwd("");
      navigate("/profile/main");
    } catch (err) {
      if (!err?.status) {
        setErrMsg("No server response");
      } else if (err?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err?.status === 401) {
        setErrMsg("Wrong credentials");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <Container>
      <div className="spinner d-flex justify-content-center align-items-center">
        <h1>Loading &nbsp;</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
  ) : (
    <div className="login-container">
      <div className="left-section">
        <div className="header">
          <div className="logo-header">
            <Link to="/">
              <img src={logo} alt="Kharkiv Gas Logo" className="logo" />
            </Link>
            <span>Kharkiv gas</span>
          </div>
          <div className="signup-nav">
            <span>Немає акаунту?</span>
            <Link to="/register" className="register-button">
              Зареєструватися
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">Увійти до особистого кабінету</h2>
          <p
            ref={errRef}
            className={errMsg ? "text-danger" : "ivisible"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <label htmlFor="username" className="login-input-hint">
            Ваш e-mail:
          </label>
          <input
            className="inputField"
            id="username"
            value={user}
            onChange={handleUserInput}
            ref={userRef}
            type="text"
            placeholder="Логін"
            required
          />
          <input
            value={pwd}
            onChange={handlePwdInput}
            id="password"
            type="password"
            placeholder="Пароль"
            required
          />
          <button type="submit" className="login-button">
            Увійти
          </button>
        </form>
      </div>
      <div className="right-section">
        <img src={banner} alt="Banner" className="banner" />
      </div>
    </div>
  );

  return content;
};

export default LoginMainContent;

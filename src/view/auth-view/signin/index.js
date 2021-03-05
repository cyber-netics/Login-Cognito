import React, { useState, useContext } from "react";
import { Row, Col } from "antd";

import { AuthContext } from "../../../components/AuthProvider";
import LoginForm from "./LoginForm";

const backgroundURL = "/img/forgotpass-bg-image.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const LoginTwo = (props) => {
  const { authenticate } = useContext(AuthContext);

  const onLogin = ({ email, password }) => {
    authenticate(email, password)
      .then((data) => {
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className={`h-100`}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={16}>
          <div className="container d-flex flex-column justify-content-center h-100">
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                <h1>Sign In</h1>
                <p>
                  Don't have an account yet? <a href="/signup">Sign Up</a>
                </p>
                <div className="mt-4">
                  <LoginForm onLogin={onLogin} />{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8}>
          <div
            className="d-flex flex-column justify-content-between h-100 px-4"
            style={backgroundStyle}
          >
            <Row justify="center">
              <Col xs={0} sm={0} md={0} lg={20}>
                <img
                  className="img-fluid mb-5"
                  src="/img/side-image.png"
                  alt=""
                />
                <h1 className="text-white">Welcome to emilus</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus ullamcorper nisl erat, vel convallis elit fermentum
                  pellentesque.
                </p>
              </Col>
            </Row>
            <div className="d-flex justify-content-end pb-4">
              <div>
                <a
                  className="text-white"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Term & Conditions
                </a>
                <span className="mx-2 text-white"> | </span>
                <a
                  className="text-white"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy & Policy
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginTwo;

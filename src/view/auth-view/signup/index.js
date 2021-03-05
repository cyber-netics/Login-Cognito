import React from "react";
import RegisterForm from "./RegisterForm";
import { Row, Col } from "antd";

import UserPool from "../../../userPool";
import { useHistory } from "react-router-dom";

const backgroundURL = "/img/forgotpass-bg-image.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const RegisterTwo = (props) => {
  let history = useHistory();

  const onSignUp = ({ email, password }) => {
    UserPool.signUp(email, password, [], null, (err, _) => {
      if (err) return;
      history.push("/");
    });
  };

  return (
    <div className={`h-100`}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={16}>
          <div className="container d-flex flex-column justify-content-center h-100">
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                <h1>Sign Up</h1>
                <p>
                  Already have an account? <a href="/">Sign In</a>
                </p>
                <div className="mt-4">
                  <RegisterForm {...props} handleSubmit={onSignUp} />
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

export default RegisterTwo;

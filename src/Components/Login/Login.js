import React, { useState } from "react";
import styles from "./Login.module.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function Login({ setShowRegister, setShowLogin, showLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal
      show={showLogin}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        setShowLogin(false);
      }}
      className={"d-flex justify-content-center " + styles.login_modal}
    >
      <Modal.Header
        className={`mx-5 d-flex justify-content-center ${styles.header}`}
      >
        <Modal.Title className="bold">LOGIN</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-5">
        <Form>
          <Form.Group className="my-2" controlId="formBasicEmail">
            <Form.Label className="d-flex justify-content-center">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </Form.Group>

          <Form.Group className="my-2" controlId="formBasicPassword">
            <Form.Label className="d-flex justify-content-center">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
            <div className="mt-1 d-flex justify-content-end">
              <NavLink
                href="#!"
                style={{ textDecoration: "none", fontSize: "0.7rem" }}
              >
                Forgot Password?
              </NavLink>
            </div>
          </Form.Group>

          <div className="my-2  d-flex justify-content-center">
            <Button
              className={"bold px-5 " + styles.loginButton}
              variant="light"
              type="submit"
            >
              LOGIN
            </Button>
          </div>
          <div className="d-flex justify-content-center text-center">
            <NavLink className={"my-1 mx-2 " + styles.modalMediaAnchor}>
              <Icon.Facebook width="1rem" height="1rem" />
            </NavLink>
            <NavLink className={"my-1 mx-2 " + styles.modalMediaAnchor}>
              <Icon.Github width="1rem" height="1rem" />
            </NavLink>
            <NavLink className={"my-1 mx-2 " + styles.modalMediaAnchor}>
              <Icon.Google width="1rem" height="1rem" />
            </NavLink>
          </div>
          <div className="mb-4 d-flex justify-content-center flex-wrap">
            <p
              className={`p-0 my-0 me-1 d-flex flex-wrap`}
              style={{ fontSize: "0.8rem", alignContent: "center" }}
            >
              Need an account?
            </p>
            {/* <NavLink className={styles.small} href="#!" style={{ textDecoration: "none" }}>
              Sign up
            </NavLink> */}
            <Button
              className={`p-0 ${styles.signupButton}`}
              variant="transparent"
              onClick={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            >
              Sign up
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;

import React, { useState } from "react";
import styles from "./Login.module.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
function Login({ show, handleClose }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
      className={"d-flex justify-content-center " + styles.login_modal}
    >
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title
          id="contained-modal-title-vcenter"
        // className="d-flex justify-content-center"
        >
          LOGIN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5">
        <Form>
          <Form.Group className="py-1" controlId="formBasicEmail">
            <Form.Label className="d-flex justify-content-center">
              Email
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="py-1" controlId="formBasicPassword">
            <Form.Label className="d-flex justify-content-center">
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <div className=" d-flex justify-content-end">
              <NavLink
                className=""
                href="#!"
                style={{ textDecoration: "none", fontSize: "0.7rem" }}
              >
                Forgot Password?
              </NavLink>
            </div>
          </Form.Group>


          <div className="p-1  d-flex justify-content-center">
            <Button className={"px-5 " + styles.loginButton} variant="light" type="submit">
              LOGIN
            </Button>
          </div>
          <div className="d-flex justify-content-center text-center">
            <NavLink className={"py-1 px-2 " + styles.modalMediaAnchor}>
              <Icon.Facebook width="1rem" height="1rem" />
            </NavLink>
            <NavLink className={"py-1 px-2 " + styles.modalMediaAnchor}>
              <Icon.Github width="1rem" height="1rem" />
            </NavLink>
            <NavLink className={"py-1 px-2 " + styles.modalMediaAnchor}>
              <Icon.Google width="1rem" height="1rem" />
            </NavLink>
          </div>
          <div className="py-1 d-flex justify-content-center">
            <p className="me-1 " style={{fontSize: "0.9rem" }}>Need an account?</p>
            <NavLink
              className=""
              href="#!"
              style={{ textDecoration: "none", fontSize: "0.8rem" }}

            >
              Sign up
            </NavLink>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;

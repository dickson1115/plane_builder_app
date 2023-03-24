import React, {useState} from "react";
import styles from "./Login.module.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
function Login({show,handleClose}) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
      className={"d-flex justify-content-center " + styles.login_modal}
    >
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="pt-4 pb-2 d-flex justify-content-center"
      >
        Login
      </Modal.Title>

      <Modal.Body className="px-5">
        <Form>
          <Form.Group className="py-2" controlId="formBasicEmail">
            <Form.Label className="d-flex justify-content-center">
              Email
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="py-2" controlId="formBasicPassword">
            <Form.Label className="d-flex justify-content-center">
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="pt-4 pb-2 d-flex justify-content-center">
            <Button className="py-2 px-5" variant="primary" type="submit">
              Login
            </Button>
          </div>
          <div className="pb-2 d-flex justify-content-center text-center">
            <NavLink className={"p-2 " + styles.modalMediaAnchor}>
              <Icon.Facebook width="20px" height="20px" />
            </NavLink>
            <NavLink className={"p-2 " + styles.modalMediaAnchor}>
              <Icon.Github width="20px" height="20px" />
            </NavLink>
            <NavLink className={"p-2 " + styles.modalMediaAnchor}>
              <Icon.Google width="20px" height="20px" />
            </NavLink>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Login;

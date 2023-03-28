import React, { useState, useEffect } from "react";
import styles from "./TestComponent.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";

// import InteractableItem from './Components/Builder/BuilderCanvas/InteractableItem/InteractableItem';
// import BuilderCanvas from './Components/Builder/BuilderCanvas/BuilderCanvas';
const TestComponent = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(null);

  const [show, setShow] = useState(true);

  const HAVE_ONE_DIGIT_REGEX = /^(?=.*[0-9]).*$/;
  const HAVE_ONE_LETTER_REGEX = /^(?=.*[a-zA-Z]).*$/;
  const SIZE_8_TO_26_REGEX = /^.{8,26}$/;

  useEffect(() => {
    setValidPassword(
      HAVE_ONE_DIGIT_REGEX.test(password) &&
        HAVE_ONE_LETTER_REGEX.test(password) &&
        SIZE_8_TO_26_REGEX.test(password)
    );
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <div>
      <Button
        onClick={() => {
          setShow(true);
        }}
      >
        Show Modal
      </Button>
      <Modal show={show} className={styles.modal}>
        <Modal.Header className="px-5">Register</Modal.Header>
        <Form>
          <Modal.Body className="px-5">
            <FormGroup className="mb-2">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl
                id="email"
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
            </FormGroup>
            <FormGroup className="mb-2">
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl
                className={
                  password == "" || validPassword ? "" : styles.invalid
                }
                id="password"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
              <div className="p-1" style={{ fontSize: "0.8rem" }}>
                <p
                  className={`m-0 ${
                    password == "" || HAVE_ONE_LETTER_REGEX.test(password)
                      ? styles.hidden
                      : styles.show
                  }`}
                >
                  Require at least 1 letter{" "}
                </p>
                <p
                  className={`m-0 ${
                    password == "" || HAVE_ONE_DIGIT_REGEX.test(password)
                      ? styles.hidden
                      : styles.show
                  }`}
                >
                  Require at least 1 digit{" "}
                </p>
                <p
                  className={`m-0 ${
                    password == "" || SIZE_8_TO_26_REGEX.test(password)
                      ? styles.hidden
                      : styles.show
                  }`}
                >
                  8-26 characters long{" "}
                </p>
              </div>
            </FormGroup>
            <FormGroup className="mb-2">
              <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
              <FormControl
                className={
                  confirmPassword == "" || validConfirmPassword
                    ? ""
                    : styles.invalid
                }
                id="confirm_password"
                type="password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                value={confirmPassword}
              />
              <div className="p-1" style={{ fontSize: "0.8rem" }}>
                <p
                  className={`m-0 ${
                    confirmPassword == "" || validConfirmPassword
                      ? styles.hidden
                      : styles.show
                  }`}
                >
                  Password mismatch{" "}
                </p>
              </div>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default TestComponent;

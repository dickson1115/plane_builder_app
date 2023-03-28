import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";

const Register = ({ setShowRegister, setShowLogin, showRegister }) => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(null);
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
        console.log(validPassword);
        setValidConfirmPassword(password === confirmPassword);
    }, [password, confirmPassword]);

    return (
        <Modal
            show={showRegister}
            onHide={() => {
                setShowRegister(false);
            }}
            className={` ${styles.modal}`}
            size="md"
            //   aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header
                className={`mx-5  ${styles.header}`}
            >
                <Modal.Title className="bold">REGISTER</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body className="mx-5 pb-0">
                    <FormGroup className="my-2">
                        <FormLabel htmlFor="email" className="">Email</FormLabel>
                        <FormControl
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            value={email}
                        />
                    </FormGroup>
                    <FormGroup className="my-2">
                        <FormLabel htmlFor="password" className="">Password</FormLabel>
                        <FormControl
                            className={password == "" || validPassword ? "" : styles.invalid}
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            value={password}
                        />
                        <div className="m-1" style={{ fontSize: "0.8rem" }}>
                            <p
                                className={`m-0 ${password == "" || HAVE_ONE_LETTER_REGEX.test(password)
                                    ? styles.hidden
                                    : styles.show
                                    }`}
                            >
                                Require at least 1 letter{" "}
                            </p>
                            <p
                                className={`m-0 ${password == "" || HAVE_ONE_DIGIT_REGEX.test(password)
                                    ? styles.hidden
                                    : styles.show
                                    }`}
                            >
                                Require at least 1 digit{" "}
                            </p>
                            <p
                                className={`m-0 ${password == "" || SIZE_8_TO_26_REGEX.test(password)
                                    ? styles.hidden
                                    : styles.show
                                    }`}
                            >
                                Must be 8-26 characters long{" "}
                            </p>
                        </div>
                    </FormGroup>
                    <FormGroup className="my-2">
                        <FormLabel htmlFor="confirm_password" className="">Confirm Password</FormLabel>
                        <FormControl
                            className={
                                confirmPassword == "" || validConfirmPassword
                                    ? ""
                                    : styles.invalid
                            }
                            id="confirm_password"
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(event) => {
                                setConfirmPassword(event.target.value);
                            }}
                            value={confirmPassword}
                        />
                        <div className="m-1" style={{ fontSize: "0.8rem" }}>
                            <p
                                className={`m-0 ${confirmPassword == "" || validConfirmPassword
                                    ? styles.hidden
                                    : styles.show
                                    }`}
                            >
                                Password mismatch{" "}
                            </p>
                        </div>
                    </FormGroup>

                </Modal.Body>
                <Modal.Footer className={`${styles.footer}`}>
                    <Button className="py-1 px-2" variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button
                        className="py-1 px-2"
                        variant="primary"
                        onClick={() => {
                            setShowRegister(false);
                            setShowLogin(true);
                        }}
                    >
                        Back
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal >
    );
};

export default Register;

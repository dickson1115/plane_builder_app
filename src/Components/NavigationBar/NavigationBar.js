import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import styles from "./NavigationBar.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Login from "../Login/Login";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import styleVariables from '../../style.sass'
// import logo from "../../Images/logo_navbar.png";
const NavigationBar = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navBarItems = ["Tutorial", "Builder", "Explore", "About"];
    const { images } = useContext(AuthContext);
    let location = useLocation().pathname;

    return (
        <div>
            <Navbar
                className={"px-2 " + styles.navBar + " " + props.className}
                collapseOnSelect
                expand="sm"
                bg="primary"
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4" />
                <Navbar.Brand href="#/">
                    <img src={images["logo.svg"]} width="30" height="30" alt="Logo" />
                    PLANE BUILDER
                </Navbar.Brand>
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-spacebetween"
                >
                    <Nav className="me-auto" activeKey={location}>
                        <Nav.Link href="#/" eventKey="/">
                            Home
                        </Nav.Link>
                        {navBarItems.map((item, index) => (
                            <Nav.Link href={"#/" + item} key={index} eventKey={"/" + item}>
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Button className={"p-0 " + styles.loginButton} onClick={handleShow}>
                        Login/Sign up
                    </Button>
                </Navbar.Collapse>
                <Login handleClose={handleClose} show={show} />
            </Navbar>
        </div>
    );
}
export default NavigationBar;

import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import styles from "./NavigationBar.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Login from "../Login/Login";
import Container from 'react-bootstrap/Container';
import Register from "../Register/Register";

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import styleVariables from '../../style.sass'
// import logo from "../../Images/logo_navbar.png";
const NavigationBar = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const { images } = useContext(AuthContext);
    let location = useLocation().pathname;

    return (

        <Navbar
            className={"px-2 " + styles.navBar + " " + props.className}
            collapseOnSelect
            expand="sm"
            // variant={(show)? "primary" : "transparent"}
            variant={"transparent"}
            // style={{height: "4rem"}}
        >
            <Container fluid>
                <Navbar.Brand eventKey="/" href="#/" className="bold" >
                    <img src={images["logo.svg"]} width="30" height="30" alt="Logo" />
                    PLANE BUILDER
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={" " + styles.toggle} />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="p-1"
                >
                    <Nav className="me-auto" activeKey={location}>
                        {/* <Nav.Link href="#/" eventKey="/">
                            Home
                        </Nav.Link> */}
                        {props.items.map((item, index) => (
                            <Nav.Link href={"#/" + item} key={index} eventKey={"/" + item}>
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Button className={"p-0 " + styles.loginButton} onClick={()=>{setShowLogin(true)}}>
                        Login/Sign up
                    </Button>
                </Navbar.Collapse>
                <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} showRegister={showRegister}  />
                <Login setShowRegister={setShowRegister} setShowLogin={setShowLogin} showLogin={showLogin} />
            </Container>
        </Navbar>
    );
}
export default NavigationBar;

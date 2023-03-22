import { useContext, React, useState, useEffect} from 'react';
import { NavLink, useLocation} from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import styles from "./Navbar.module.css";
import Login from "../Login/Login"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styleVariables from '../../style.sass'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons';
// import logo from "../../Images/logo_navbar.png";
const NavBar = (props) => {
    const navBarItems = ["Home", "Tutorial", "Builder", "Explore", "About"]
    const { images } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // useCallback(() => {
    // console.log(useLocation())
    // },[])
    // console.log(useLocation())
    let location = useLocation().pathname;
    useEffect(() => {
        console.log(location)
    },[location])
    return (
        <div>

            <Navbar className={"px-2 " + styles.navBar + " " + props.className} collapseOnSelect expand="sm" bg="primary">
                {/* <Container className="justify-content-start"> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4" />
                <Navbar.Brand href="#/Home">
                    <img src={images["logo.svg"]} width="30" height="30" alt="Logo" />
                    PLANE BUILDER
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-spacebetween">
                    <Nav className="me-auto" activeKey={location}>
                        {
                            navBarItems.map((item, index) => {
                                return (
                                    <Nav.Link href={"#/" + item} key={index} eventKey={"/" + item}>
                                        {item}
                                    </Nav.Link>
                                )
                            })
                        }
                    </Nav>
                    <Button  className={"p-0 " + styles.loginButton} onClick={handleShow}>
                        Login/Sign up
                    </Button>
                    {/* <Button className={"navbar-collapse"} aria-controls="responsive-navbar-nav">button</Button>
                     */}
                </Navbar.Collapse>

                {/* </Container> */}
                <Modal
                    show={show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={handleClose}
                    className={"d-flex justify-content-center " + styles.login_modal}
                >
                    <Modal.Title id="contained-modal-title-vcenter" className="pt-4 pb-2 d-flex justify-content-center">
                        Login
                    </Modal.Title>

                    <Modal.Body className="px-5">
                        <Form>
                            <Form.Group className="py-2" controlId="formBasicEmail">
                                <Form.Label className="d-flex justify-content-center">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="py-2" controlId="formBasicPassword">
                                <Form.Label className="d-flex justify-content-center">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="pt-4 pb-2 d-flex justify-content-center">
                                <Button className="py-2 px-5" variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                            <div className="pb-2 d-flex justify-content-center text-center">
                                <NavLink className={"p-2 " + styles.modalMediaAnchor}><Icon.Facebook width="20px" height="20px" /></NavLink>
                                <NavLink className={"p-2 " + styles.modalMediaAnchor}><Icon.Github width="20px" height="20px" /></NavLink>
                                <NavLink className={"p-2 " + styles.modalMediaAnchor}><Icon.Google width="20px" height="20px" /></NavLink>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Navbar>
        </div>
        // //style={{backgroundColor: "#89939E"}} *for custom navbar colors
        // <div>
        //     <a className={"close-navbar-toggler collapsed " + styles.close_navbar_toggler} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //     </a>
        //     <nav className={"navbar navbar-expand-lg " + styles.navBar}>
        //         <div className="container-fluid">
        //             <NavLink className="navbar-brand" to={"/Home"}>
        //                 <img src={images["logo.svg"]} width="50" height="50" alt="Logo" />
        //                 Plane Builder
        //             </NavLink>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
        //                 <ul className="navbar-nav">
        //                     {
        //                         navBarItems.map((item, index) => {
        //                             return (
        //                                 <li key={index} className="nav-item">
        //                                     <NavLink className="nav-link" to={"/" + item}>
        //                                         {item}
        //                                     </NavLink>
        //                                 </li>
        //                             )
        //                         })
        //                     }
        //                     {/* <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown link
        //                     </a>
        //                     <ul className="dropdown-menu">
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                         <li><a className="dropdown-item" href="#">Another action</a></li>
        //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li> */}
        //                 </ul>
        //                 <button type="button" className={"btn p-0 " + styles.btn} data-bs-toggle="modal" data-bs-target="#login">
        //                     Login/Sign up
        //                 </button>
        //                 {/* <ul className="navbar-nav">
        //                 <li className="nav-item" style={{ fontFamily: "BNRegular"}}>
        //                     <NavLink className="nav-link" to={"/Login"}>
        //                         Login/Sign up
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item" style={{ fontFamily: "BNRegular" }}>
        //                     <NavLink className="nav-link" to={"/Sign-Up"}>
        //                         Sign Up
        //                     </NavLink>
        //                 </li>
        //             </ul> */}

        //                 {/* <form className="d-flex" role="search">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form> */}
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    )

}
export default NavBar
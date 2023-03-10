import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import styles from "./NavBar.module.css";
import Login from "../Login/Login"
// import logo from "../../Images/logo_navbar.png";
const NavBar = ({ currentPage }) => {
    const navBarItems = ["Home", "Tutorial", "Builder", "Explore", "About"]
    const { images } = useContext(AuthContext);
    return (

        //style={{backgroundColor: "#89939E"}} *for custom navbar colors
        <nav className={"navbar fixed-top navbar-expand-lg " + styles.navBar}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={images["logo.svg"]} width="50" height="50" alt="Logo" />
                    Plane Builder
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {
                            navBarItems.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <NavLink className="nav-link" to={"/" + item}>
                                            {item}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <button type="button" className={"btn " + styles.btn} data-bs-toggle="modal" data-bs-target="#login">
                        Login/Sign up
                    </button>
                    {/* <ul className="navbar-nav">
                        <li className="nav-item" style={{ fontFamily: "BNRegular"}}>
                            <NavLink className="nav-link" to={"/Login"}>
                                Login/Sign up
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{ fontFamily: "BNRegular" }}>
                            <NavLink className="nav-link" to={"/Sign-Up"}>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul> */}

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )

}
export default NavBar
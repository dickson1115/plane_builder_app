import { NavLink } from "react-router-dom";
import logo from "../Images/logo-navbar.png";
const NavBar = ({ currentPage }) => {
    const navBarItems = ["Home", "Tutorial", "Builder", "Explore", "About"]
    return (
        //style={{backgroundColor: "#89939E"}} *for custom navbar colors
       <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: "rgb(255 248 233)"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontFamily: "BNRegular"}}>
                    <img src={logo} width="50" height="50" alt="Logo" />
                    Plane Builder
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {
                            navBarItems.map((item,index) => {
                                return (
                                    <li key={index} className="nav-item" style={{ fontFamily: "BNRegular"}}>
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
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )

}
export default NavBar
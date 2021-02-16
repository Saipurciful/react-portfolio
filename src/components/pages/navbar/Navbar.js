import React from "react";
import "./navbar.css"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (

        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h3><Link
                        to="/"
                        className={location.pathname === "/home" ? "nav-link active" : "nav-link"}
                    >
                        Suthunya Purciful
        </Link></h3>

                </div>
                <div className='links-container'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                            >
                                About
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/resume"
                                className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                            >
                                Resume
        </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );



}
export default Navbar;

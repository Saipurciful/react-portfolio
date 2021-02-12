import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"
import { FaBars } from 'react-icons/fa';
import { links } from './navbarData';


const Navbar = () => {
    const location = useLocation();
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
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

                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text, icon } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon} {text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

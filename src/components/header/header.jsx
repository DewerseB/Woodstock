import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
    const [isBurgerActive, setisBurgerActive] = useState(false);
    return (
        <header className={`${useLocation().pathname === "/Woodstock/" ? "home" : "nothome"}`}>
            <nav className="navbar bg-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/Woodstock/" className={`navbar-item nav-link${useLocation().pathname === "/Woodstock/" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Woodstock</Link>
                    <button className={`navbar-burger burger${isBurgerActive ? " is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="mainMenu" onClick={() => setisBurgerActive(!isBurgerActive)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="mainMenu" className={`navbar-menu${isBurgerActive ? " is-active has-background-black" : ""}`}>
                    <div className="navbar-end">
                        <Link to="/Woodstock/about" className={`navbar-item nav-link${useLocation().pathname === "/Woodstock/about" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>About</Link>
                        <Link to="/Woodstock/furnitures" className={`navbar-item nav-link${useLocation().pathname === "/Woodstock/furnitures" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Furnitures</Link>
                        <Link to="/Woodstock/shop" className={`navbar-item nav-link${useLocation().pathname === "/Woodstock/shop" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Shop</Link>
                        <Link to="/Woodstock/contact" className={`navbar-item nav-link${useLocation().pathname === "/Woodstock/contact" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
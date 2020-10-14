import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
    const [isBurgerActive, setisBurgerActive] = useState(false);
    return (
        <header class={`${useLocation().pathname === "/Woodstock/" ? "home" : "nothome"}`}>
            <nav class="navbar bg-transparent" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link to="/Woodstock/" class={`navbar-item nav-link${useLocation().pathname === "/Woodstock/" ? " is-current" : ""}`}>Woodstock</Link>
                    <button role="button" class={`navbar-burger burger${isBurgerActive ? " is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="mainMenu" onClick={() => setisBurgerActive(!isBurgerActive)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="mainMenu" class={`navbar-menu${isBurgerActive ? " is-active has-background-black" : ""}`}>
                    <div class="navbar-end">
                        <Link to="/Woodstock/about" class={`navbar-item nav-link${useLocation().pathname === "/Woodstock/about" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>About</Link>
                        <Link to="/Woodstock/furnitures" class={`navbar-item nav-link${useLocation().pathname === "/furnitures" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Furnitures</Link>
                        <Link to="/Woodstock/shop" class={`navbar-item nav-link${useLocation().pathname === "/Woodstock/shop" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Shop</Link>
                        <Link to="/Woodstock/contact" class={`navbar-item nav-link${useLocation().pathname === "/Woodstock/contact" ? " is-current" : ""}`} onClick={() => setisBurgerActive(false)}>Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
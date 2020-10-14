import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
    const [isBurgerActive, setisBurgerActive] = useState(false);
    return (
        <header>
            <nav class="navbar bg-transparent" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link to="/" class={`navbar-item nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}>Woodstock</Link>
                    <a role="button" class={`navbar-burger burger${isBurgerActive ? " is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="mainMenu" onClick={() => setisBurgerActive(!isBurgerActive)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="mainMenu" class={`navbar-menu bg-transparent${isBurgerActive ? " is-active" : ""}`}>
                    <div class="navbar-end">
                        <Link to="/about" class={`navbar-item nav-link${useLocation().pathname === "/about" ? " is-current" : ""}`}>About</Link>
                        <Link to="/furnitures" class={`navbar-item nav-link${useLocation().pathname === "/furnitures" ? " is-current" : ""}`}>Furnitures</Link>
                        <Link to="/shop" class={`navbar-item nav-link${useLocation().pathname === "/shop" ? " is-current" : ""}`}>Shop</Link>
                        <Link to="/contact" class={`navbar-item nav-link${useLocation().pathname === "/contact" ? " is-current" : ""}`}>Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
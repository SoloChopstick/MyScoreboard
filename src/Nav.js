import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
    const navStyle = {
        color: "white"
    }
    return (
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/source">
                    <li>Source</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;
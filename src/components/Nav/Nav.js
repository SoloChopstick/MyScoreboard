//REACT IMPORTS
import React from "react";
import { Link, withRouter } from "react-router-dom";

//COMPONENT IMPORTS
import NavButton from "./NavButton"

//DATA IMPORTS
import {sections} from "../../data/sections"

//STYLE IMPORTS
import "./Nav.css"

const Nav = () => {

    const buttons = sections.map( (section) => <NavButton key={section.name} {...section}/>)
    return (
        <nav>
            MY-NBA
            <ul className="nav-links">
                {buttons}
                <li> | </li>
                <Link className="navStyle" to="/about">
                    <li>About</li>
                </Link>
                <a 
                    className="navStyle" 
                    href="https://github.com/SoloChopstick/MyScoreboard">Source
                </a>
            </ul>
        </nav>
    )
}
export default Nav;
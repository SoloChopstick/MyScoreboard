//REACT IMPORTS
import React from "react";
import { Link, withRouter } from "react-router-dom";

//COMPONENT IMPORTS
import NavButton from "./NavButton"

//DATA IMPORTS
import {sports} from "../../data/sports"

//STYLE IMPORTS
import "./Nav.css"

const Nav = () => {

    const buttons = sports.map( (sport) => <NavButton key={sport.name} {...sport}/>)
    return (
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                {buttons}
                <li> | </li>
                <Link className="navStyle" to="/about">
                    <li>About</li>
                </Link>
                <a 
                    className="navStyle" 
                    href="https://github.com/SoloChopstick">Source
                </a>
            </ul>
        </nav>
    )
}
export default Nav;
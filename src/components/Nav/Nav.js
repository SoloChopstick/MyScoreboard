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
            <ul className="nav_ul">
                <li className="first_item">                
                    <Link className="nav_Style" to="/">
                    MY-NBA</Link>
                </li>
                {buttons}

                <li className="nav_li"> | </li>
                
                <li className="nav_li">                
                    <Link className="nav_Style" to="/about">
                    About</Link>
                </li>

                <li className="nav_li">
                    <a 
                        className="nav_Style" 
                        href="https://github.com/SoloChopstick/MyScoreboard">Source
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
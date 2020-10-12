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

    const buttons = sections.map(section => <NavButton key={section.name} {...section}/>)
    return (
        <nav>
            <ul className="nav_ul">
                <li className="first_item">                
                    <Link className="nav_Style" to="/">
                    HOME</Link>
                </li>
                {buttons}

                <div className="nav_Style"> | </div>

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
            {/*
            <ul>
                <li class="one"><a href="#">Uno</a></li>
                <li class="two"><a href="#">Dos</a></li>
                <li class="three"><a href="#">Tres</a></li>
                <li class="four"><a href="#">Quatro</a></li>
                <hr/>
            </ul>
            */}
        </nav>
    )
}
export default Nav;
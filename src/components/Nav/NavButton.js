import React from "react"
import { Link } from 'react-router-dom'
import "./Nav.css"

const NavButton = (props) => {
    return (
        <li className="nav_li">
            <Link className="nav_Style" to={props.name.toLowerCase()}>
                {props.name}
            </Link>
        </li>
    )
}

export default NavButton
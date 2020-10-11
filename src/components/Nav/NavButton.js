import React from "react"
import { Link } from 'react-router-dom'
import "./Nav.css"

const NavButton = (props) => {
    return (
        <div>
            <Link className="navStyle" to={props.name.toLowerCase()}>
                <li>{props.name}</li>
            </Link>
        </div>
    )
}

export default NavButton
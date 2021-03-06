import React from "react"
import { Link } from 'react-router-dom'
import "./Home.css"

const HomeNavButton = (props) => {
    return (
        <Link className="nav_Style" to={props.name.toLowerCase()}>
            <div className="buttonContainer">
                <li>{props.name}</li>
            </div>
        </Link>
    )
}

export default HomeNavButton
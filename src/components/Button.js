import React from "react"
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <Link to={props.name.toLowerCase()}>
                {props.name}
            </Link>
        </div>
    )
}

export default Button
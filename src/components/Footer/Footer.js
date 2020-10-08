import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <p> Want to Connect? </p>
            <FontAwesomeIcon icon={faCoffee}/>
            {/*
            <ul>
                <li>
                <a href="mailto:hanw.xie@gmail.com">
                    <i class="fas fa-envelope-square"></i>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/hanwenxie/">
                    <i class="fab fa-linkedin"></i>
                </a>
                </li>

                <li>
                <a href="https://github.com/SoloChopstick">
                    <i class="fab fa-github-square"></i>
                </a>
                </li>

                <li>
                <a href="https://www.instagram.com/han_xie95/">
                    <i class="fab fa-instagram-square"></i>
                </a>
                </li>

                <li>
                <a href="https://www.facebook.com/hanwen.xie.18">
                    <i class="fab fa-facebook-square"></i>
                </a>
                </li>
            </ul>
            */}
        </div>
    )
}

export default Footer
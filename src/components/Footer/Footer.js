import React from "react"

//ICON IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//STYLE IMPORTS
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <p> Want to Connect? </p>
            <ul className="footer-links">
                <li>
                    <a className="footerStyle" href="https://github.com/SoloChopstick">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                </li>
                <li>
                    <a className="footerStyle" href="https://www.linkedin.com/in/hanwenxie/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                </li>
                <li>
                    <a className="footerStyle" href="mailto:hanw.xie@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                    </a>
                </li>
                <li>
                    <a className="footerStyle" href="https://www.instagram.com/han_xie95/">
                        <FontAwesomeIcon icon={faInstagram} size="3x"/>
                    </a>
                </li>
                <li>
                    <a className="footerStyle" href="https://www.facebook.com/hanwen.xie.18">
                        <FontAwesomeIcon icon={faFacebook} size="3x"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
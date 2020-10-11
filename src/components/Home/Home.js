//REACT IMPORTS
import React from "react"

//IMAGE IMPORTS
import reactLogo from "../../images/logos/React.png"
import ES6Logo from "../../images/logos/ES6.png"
import NodeJsLogo from "../../images/logos/NodeJs.png"
import html5Logo from "../../images/logos/html5.png"
import cssLogo from "../../images/logos/css.png"
//COMPONENT IMPORTS
import NavButton from "../Nav/NavButton"

//DATA IMPORTS
import {sports} from "../../data/sports"

//STYLE IMPORTS
import './Home.css';

const Home = () => {
    const buttons = sports.map(sport => (<NavButton key={sport.name} {...sport} />))

    return (
        <div className="home">
            <h1>MY NBA SCOREBOARD</h1>
            <h2>NBA scoreboard built with:</h2>
            <div className="row">
                <div className="col">
                    <img src={reactLogo} alt="React"></img>
                </div>
                <div className="col">
                    <img src={NodeJsLogo} alt="NodeJS"></img>
                </div>
                <div className="col">
                    <img src={ES6Logo} alt="ES6"></img>
                </div>
                <div className="col">
                    <img src={html5Logo} alt="HTML5"></img>
                </div>
                <div className="col">
                    <img src={cssLogo} alt="CSS"></img>
                </div>
            </div>
            <div className="container">
                <div className="home-links">
                    {buttons}
                </div>
            </div>
            <p>
                This is an ongoing project to learn front-end web dev.
                <br/>
                Primarily built with ReactJS, NodeJS, ES6, HTML5, CSS.
            </p>
        </div>
    )
}
export default Home
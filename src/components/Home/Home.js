//REACT IMPORTS
import React from "react"

//IMAGE IMPORTS
import reactLogo from "../../images/logos/React.png"
import ES6Logo from "../../images/logos/ES6.png"
import NodeJsLogo from "../../images/logos/NodeJs.png"

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
            <h1>MY SCOREBOARD</h1>
            <h2>Real-time NBA scoreboard built with:</h2>
            <div className="row">
                <div className="col">
                    <img src={reactLogo} alt="React"></img>
                </div>
                <div className="col">
                    <img src={ES6Logo} alt="ES6"></img>
                </div>
            </div>
            <div className="home-links">
                {buttons}
            </div>
        </div>
    )
}
export default Home
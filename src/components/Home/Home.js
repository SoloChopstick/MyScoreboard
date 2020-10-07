import React from "react"
import reactLogo from "../../images/logos/React.png"
import ES6Logo from "../../images/logos/ES6.png"
import NodeJsLogo from "../../images/logos/NodeJs.png"
import Button from "../Button"
import {BrowserRouter as Router} from "react-router-dom"
import './Home.css';
import Nba from "../../Nba"
//import sports from "../data/SportsPages.js"

const Home = () => {
    const sports = [
        {
            name: "NBA",
            sport: "basketball",
        },
        {
            name: "NHL",
            sport: "hockey",
        },
        {
            name: "NFL",
            sport: "football",
        }
    ]

    const buttons = sports.map(sport => (<Button key={sport.name} {...sport} />))
    
    return (
        <div>
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
            <div className="list">
                {buttons}
            </div>
        </div>
    )
}
export default Home
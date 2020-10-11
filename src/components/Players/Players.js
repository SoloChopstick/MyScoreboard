import React from "react"
import PlayerCard from "./PlayerCard"

import "./Players.css"
class Players extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            players: []
        }
    }

    componentDidMount() {
        let url = "https://www.balldontlie.io/api/v1/players?search=lebron"
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                isLoaded:true,
                players: response.data
            });
        });
    };
    
    render() {
        const {isLoaded, players} = this.state;
        console.log(players);

        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }

        const playersDisplay = players.map(player => (
            <PlayerCard key={player.id} {...player}/>
        ))

        return (
            <div>
                <h1> HELLO FROM PLAYERS </h1>
                {playersDisplay}
            </div>
        )
    }
}
export default Players
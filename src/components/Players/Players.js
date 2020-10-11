import React from "react"
import PlayerCard from "./PlayerCard"

import "./Players.css"
class Players extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            playerNameSearch: "",
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
    
    handleChange = (e) => {
        this.setState({
            playerNameSearch: e.target.value
        })
    }

    addPlayer = (e) => {
        let url = "https://www.balldontlie.io/api/v1/players?search=" + this.state.playerNameSearch;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(response => {
            let tmpArray = [];
            //Push previous players into temp array
            for (let i = 0; i < this.state.players.length; i++) {
                tmpArray.push(this.state.players[i])
            }
            //Push new players into temp array
            for (let i = 0; i < response.data.length; i++) {
                tmpArray.push(response.data[i])
            }
            this.setState({
                players: tmpArray,
            })
        })
    }

    render() {
        const {isLoaded, players} = this.state;
        console.log(this.state.players)
        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }

        const playersDisplay = players.map(player => (
            <PlayerCard key={player.id} {...player}/>
        ))

        return (
            <div className="players">
                <h1> PLAYER SEASON AVERAGES 2019-2020</h1>
                <input type="text" placeholder="SEARCH FOR PLAYERS e.g. LEBRON" onChange={this.handleChange}></input>
                <input type="button" onClick={this.addPlayer} value="Add Players"></input>
                {playersDisplay}
            </div>
        )
    }
}
export default Players
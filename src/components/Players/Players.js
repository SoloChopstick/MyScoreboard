import React from "react"
import PlayerCard from "./PlayerCard"
import CalendarDates from "../CalendarDates/CalendarDates"
import "./Players.css"
class Players extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            playerNameSearch: "",
            players: [],
            season: 2019
        }
    }

    componentDidMount() {
        let url = "https://www.balldontlie.io/api/v1/players?season=" + this.state.season + "&search=lebron"
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                isLoaded:true,
                players: response.data
            });
        });
    };
    
    /* --- PLAYER --- */
    handleChange = (e) => {
        this.setState({
            playerNameSearch: e.target.value
        })
    }

    addPlayer = (e) => {
        e.preventDefault();
        let url = "https://www.balldontlie.io/api/v1/players?season=" + this.state.season + "&search=" + this.state.playerNameSearch;
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

    deletePlayer = (e, id) => {
        e.preventDefault();
        const {players} = this.state;
        console.log(players)
        let tmpArray = [];
        for (let i = 0; i < players.length; i++) {
            players[i].id !== id && tmpArray.push(players[i])
        }
        this.setState({
            players: tmpArray,
        })
    }

    /* --- SEASON --- */
    selectSeason = (e) => {
        this.setState({
            season: e.target.value
        })
    }

    prevSeason = (e) => {
        this.setState(prevState => {
            return ({
                season: prevState.season - 1
            })
        })
    }

    nextSeason = (e) => {
        this.setState(prevState => {
            return ({
                season: prevState.season + 1
            })
        })
    }

    render() {
        let today = new Date();
        let yyyy = today.getFullYear();
        const {isLoaded, players, season} = this.state;
        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }

        const playersDisplay = players.map(player => (
            <PlayerCard key={player.id} {...player} delete={this.deletePlayer}/>
        ))

        /*
        let seasonSelect = [];
        for (let i = 1979; i <= yyyy; i++) {
            seasonSelect.push(<option value={i}>{i}-{i+1}</option>)
        }
        */

        return (
            <div className="players">
                <CalendarDates currSeason={season} prevSeason={this.prevSeason} nextSeason={this.nextSeason}/>
                {/*
                <label for="season">Choose a season:</label>
                <select name="season" id="season">
                    {seasonSelect}
                </select>
                <input type="button" onClick={this.selectSeason} value="confirm"></input>
                */}
                <input type="text" placeholder="SEARCH FOR PLAYERS e.g. LEBRON" onChange={this.handleChange}></input>
                <input type="button" onClick={this.addPlayer} value="Add Players"></input>
                <h1>SEASON AVG</h1>
                {playersDisplay}
            </div>
        )
    }
}
export default Players
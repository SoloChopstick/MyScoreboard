/* --- REACT IMPORTS --- */
import React from "react"

/* --- COMPONENT IMPORTS --- */
import PlayerCard from "./PlayerCard"
import CalendarDates from "../CalendarDates/CalendarDates"

/* --- STYLE IMPORTS --- */
import "./Players.css"


class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            playerNameSearch: "",
            players: [],
        }
    }

    componentDidMount() {
        let { match } = this.props;
        console.log(match.params.season)
        let url = `https://www.balldontlie.io/api/v1/players?season=${match.params.season}&search=lebron`
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
        let { match } = this.props;
        let url = `https://www.balldontlie.io/api/v1/players?season=${match.params.season}&search=${this.state.playerNameSearch}`
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
    /*
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
    */

    render() {
        const {isLoaded, players} = this.state;
        const {season} = this.props.match.params;
        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }

        const playersDisplay = players.map(player => (
            <PlayerCard key={player.id} {...player} delete={this.deletePlayer}/>
        ))

        return (
            <div className="players">
                <CalendarDates currSeason={season} />
                <input type="text" placeholder="SEARCH FOR PLAYERS e.g. LEBRON" onChange={this.handleChange}></input>
                <input type="button" onClick={this.addPlayer} value="Add Players"></input>
                <h1>SEASON AVG</h1>
                <div className="tables_container">
                    {playersDisplay}
                </div>
            </div>
        )
    }
}
export default Players
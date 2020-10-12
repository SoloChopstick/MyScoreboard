import React from "react"
import GameCard from "./GameCard"
import NoGames from "./NoGames"
import CalendarDates from "../Calendar/CalendarDates"
class Games extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            games: []
        }
    }
    
    componentDidMount() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;
        const url = "https://www.balldontlie.io/api/v1/games?start_date=" + today + "&end_date=" + today;
        //const url = "https://www.balldontlie.io/api/v1/games?start_date=10-12-2020&end_date=10-12-2020";
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                isLoaded: true,
                games: response.data
            })
        })
    }

    render() {
        let today = new Date();
        /*
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = yyyy + mm + dd;
        */

        const {isLoaded, games} = this.state;
        let gamesDisplay;
        console.log(games.length);
        console.log(games);
        //No Games
        if (games.length === 0) {
            gamesDisplay = <NoGames/>
        }
        else {
            gamesDisplay = games.map(game => (<GameCard key={game.id} {...game}/>))
        }

        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }
        return (
            <div className="games">
                <CalendarDates today={today} />
                <h1> HELLO FROM GAMES </h1>
                {gamesDisplay}
            </div>
        )
    }
}
export default Games
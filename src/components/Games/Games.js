import React from "react"
import GameCard from "./GameCard"
import NoGames from "./NoGames"
import CalendarDates from "../Calendar/CalendarDates"
import _ from 'lodash'
class Games extends React.Component {
    constructor(props) {
        super(props)

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
        const url = `https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`;
        //const url = "https://www.balldontlie.io/api/v1/games?start_date=10-02-2020&end_date=10-02-2020";
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                isLoaded: true,
                games: response.data
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { match } = this.props;
        let today;

        if (_.isEmpty(match.params)) {
            today = new Date();
        } else {
            today = new Date(match.params.date)
        }

        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;
        const url = `https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`;
        //const url = "https://www.balldontlie.io/api/v1/games?start_date=10-12-2020&end_date=10-12-2020";
        fetch(url)
        .then(response => response.json())
        .then(response => {
            //make sure to not have infinite loop of rendering -> updating
            if(!_.isEqual(response.data, prevState.games)) {
                this.setState({
                    games: response.data
                })
            }
        })
    }

    render() {
        const { match } = this.props;
        //Dynamic Router, set date to params.date
        let today;
        if (_.isEmpty(match.params)) {
            today = new Date();;
        } else {
            today = new Date(match.params.date)
        }
        const {isLoaded, games} = this.state;
        let gamesDisplay;

        //No Games
        if (games.length === 0) {
            gamesDisplay = <NoGames/>
        }
        else {
            gamesDisplay = games.map(game => (<GameCard key={game.id} {...game}/>))
        }

        if (!isLoaded) {
            return (
                <div className="games">
                    <h1> LOADING . . .</h1>
                </div>
            )
        }
        return (
            <div className="games">
                <CalendarDates today={today} />
                {gamesDisplay}
            </div>
        )
    }
}
export default Games
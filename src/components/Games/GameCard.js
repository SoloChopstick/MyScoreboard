import React from "react"

class GameCard extends React.Component {
    constructor(props) {
        super(props)
    }


    /*
    componentDidMount() {
        fetch("https://api-nba-v1.p.rapidapi.com/games/date/2020-10-11", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                "x-rapidapi-key": "ac77712ebcmshebd8a123af3fd36p1911bdjsn825835ef4158"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }
    */

    render() {
        const {date, home_team_score, visitor_team_score, period, status, postseason, home_team, visitor_team, } = this.props;
        let gameCardDisplay;
        //POST SEASON
        if (postseason) {
            gameCardDisplay = (
            <div>
                <h3> {date} </h3>
                <h3> {home_team.abbreviation} {home_team_score}</h3>
                <h3> {visitor_team.abbreviation} {visitor_team_score}</h3>
            </div>
            )
        }
        //REGULAR SEASON
        else {
            gameCardDisplay = (
            <div>
                <h3> {date} </h3>
                <h3> {home_team.abbreviation} {home_team_score}</h3>
                <h3> {visitor_team.abbreviation} {visitor_team_score}</h3>
            </div>
            )
        }
        return (
            gameCardDisplay
        )
    }
}

export default GameCard
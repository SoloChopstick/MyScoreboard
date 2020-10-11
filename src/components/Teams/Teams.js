import React from "react"
import TeamCard from "./TeamCard"
class Teams extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            teams: []
        }
    }

    componentDidMount() {
        const url = "https://www.balldontlie.io/api/v1/teams"
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState ({
                isLoaded: true,
                teams: response.data
            })
        })
    }

    render() {
        const {isLoaded, teams} = this.state;

        const teamsDisplay = teams.map(team => (<TeamCard key={team.id} {...team}/>))
        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }

        return (
            <div className="teams">
                <h1> HELLO FROM TEAMS </h1>
                {teamsDisplay}
            </div>
        )
    }
}
export default Teams
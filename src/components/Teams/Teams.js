import React from "react"

class Teams extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            teams: []
        }
    }

    render() {
        const {isLoaded, teams} = this.state;

        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }

        return (
            <div>
                <h1> HELLO FROM TEAMS </h1>
            </div>
        )
    }
}
export default Teams
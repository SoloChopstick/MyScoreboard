import React from "react"

class Games extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            games: []
        }
    }

    componentDidMount() {

    }

    render() {
        const {isLoaded, games} = this.state;

        if (!isLoaded) {
            return (
                <h1> LOADING . . .</h1>
            )
        }
        return (
            <div>
                <h1> HELLO FROM GAMES </h1>
            </div>
        )
    }
}
export default Games
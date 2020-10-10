import React from "react"

class PlayerCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <li>
                {this.props.first_name + " " + this.props.last_name}
            </li>
        )
    }
}
export default PlayerCard
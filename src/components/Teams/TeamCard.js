import React from "react"

class TeamCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const {abbreviation, city, conference, division, full_name, name} = this.props;
        return (
            <div>
                {abbreviation} | {full_name}
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Conference</th>
                            <th>Division</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{city}</td>
                            <td>{conference}</td>
                            <td>{division}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TeamCard
import React from "react"
import { makeRandomColor } from "../../util/randomColor.js"

class PlayerCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stats: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        let url = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + this.props.id;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                stats: response.data,
                isLoaded: true
            });
        });
    };

    render() {
        const {first_name, last_name, height_feet, height_inches, position, id} = this.props;
        const {isLoaded, stats} = this.state;
        const height = height_feet === null ? "" : ("| Height:" + height_feet + "'" + height_inches + "\"")
        let dataDisplay;
        if(isLoaded & stats[0] != null) {
            const {
                games_played,
                min,
                fgm,
                fga,
                fg3m,
                fg3a,
                ftm,
                fta,
                oreb,
                dreb,
                reb,
                ast,
                stl,
                blk,
                turnover,
                pf,
                pts,
                fg_pct,
                fg3_pct,
                ft_pct} = stats[0];

            dataDisplay = 
            <tr>
                <td>{games_played}</td>
                <td>{min}</td>
                <td>{fgm}</td>
                <td>{fga}</td>
                <td>{fg_pct}</td>
                <td>{fg3m}</td>
                <td>{fg3a}</td>
                <td>{fg3_pct}</td>
                <td>{ftm}</td>
                <td>{fta}</td>
                <td>{ft_pct}</td>
                <td>{oreb}</td>
                <td>{dreb}</td>
                <td>{reb}</td>
                <td>{ast}</td>
                <td>{stl}</td>
                <td>{blk}</td>
                <td>{turnover}</td>
                <td>{pf}</td>
                <td>{pts}</td>
            </tr>
        }

        let playerColor = makeRandomColor();
        const style = {
            color: playerColor,
        }
        return (
            <div>
                <div style={style}>
                    <h3>{first_name + " " + last_name}</h3>
                    Position: {position} | Team: {this.props.team.abbreviation} {this.props.team.full_name} {height}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>GP</th>
                            <th>MIN</th>
                            <th>FGM</th>
                            <th>FGA</th>
                            <th>FGP-CT</th>
                            <th>FG3M</th>
                            <th>FG3A</th>
                            <th>FG3-PCT</th>
                            <th>FTM</th>
                            <th>FTA</th>
                            <th>FT-PCT</th>
                            <th>OREB</th>
                            <th>DREB</th>
                            <th>REB</th>
                            <th>AST</th>
                            <th>STL</th>
                            <th>BLK</th>
                            <th>TO</th>
                            <th>PF</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDisplay}
                    </tbody>
                </table>
                <input type="button" onClick={(e) => {this.props.delete(e, id)}} value="Delete Player"></input>
            </div>
        )
    }
}
export default PlayerCard
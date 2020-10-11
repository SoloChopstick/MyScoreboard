import React from "react"

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
        const {first_name, last_name, height_feet, height_inches, position} = this.props;
        const {isLoaded, stats} = this.state;
        const height = height_feet === null ? "" : ("| Height:" + height_feet + "'" + height_inches + "\"")
        console.log(this.state.stats[0]);
        let dataDisplay;
        if(isLoaded) {
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
                <td>{stats[0].games_played}</td>
                <td>{stats[0].min}</td>
                <td>{stats[0].fgm}</td>
                <td>{stats[0].fga}</td>
                <td>{stats[0].fg_pct}</td>
                <td>{stats[0].fg3m}</td>
                <td>{stats[0].fg3a}</td>
                <td>{stats[0].fg3_pct}</td>
                <td>{stats[0].ftm}</td>
                <td>{stats[0].fta}</td>
                <td>{stats[0].ft_pct}</td>
                <td>{stats[0].oreb}</td>
                <td>{stats[0].dreb}</td>
                <td>{stats[0].reb}</td>
                <td>{stats[0].ast}</td>
                <td>{stats[0].stl}</td>
                <td>{stats[0].blk}</td>
                <td>{stats[0].turnover}</td>
                <td>{stats[0].pf}</td>
                <td>{stats[0].pts}</td>
            </tr>
        }

        return (
            <div>
                <h3>{first_name + " " + last_name}</h3>
                Position: {position} | Team: {this.props.team.abbreviation} {this.props.team.full_name} {height}
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
            </div>
        )
    }
}
export default PlayerCard
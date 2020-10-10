import React from "react";

class Nba extends React.Component {
    constructor() {
        super()

        this.state = {
            live: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://api-nba-v1.p.rapidapi.com/games/date/2020-09-02", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                "x-rapidapi-key": "ac77712ebcmshebd8a123af3fd36p1911bdjsn825835ef4158"
            }
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                live: json
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        var {isLoaded, live} = this.state;
        if (!isLoaded) {
            return <div> Loading...</div>
        }
        return (
            <div>
              <h1>Hello from NBA</h1>
              <ul>
                  {//live.map(game => (<li></li>))
                  }
              </ul>
            </div>
          );
    }
};

export default Nba;
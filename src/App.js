
//REACT IMPORTS
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//COMPONENT IMPORTS
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import About from "./About"
import Games from "./components/Games/Games"
import Players from "./components/Players/Players"
import PlayersSeason from"./components/Players/PlayersSeason"
import Teams from "./components/Teams/Teams"
import Footer from "./components/Footer/Footer"

//STYLE IMPORTS
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={Home}/>
          <Route path="/teams" exact component={Teams}/>
          <Route path="/games" exact component={Games}/>
          <Route path="/players" exact component={Players}/>
          <Route path="/games/:date" component={Games}/>
          <Route path="/players/:season" component={PlayersSeason}/>
        </Switch>
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Alegreya"></link>
        <script src="https://kit.fontawesome.com/5af6939b2b.js" crossorigin="anonymous"></script>
      </header>
      <Footer />
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import Nav from "./Nav"
import About from "./About"
import Nba from "./Nba"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/nba" exact component={Nba}/>
        </Switch>
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </header>
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

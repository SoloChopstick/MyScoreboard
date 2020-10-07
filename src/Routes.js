import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nba from "./Nba";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/NBA" component={Nba} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
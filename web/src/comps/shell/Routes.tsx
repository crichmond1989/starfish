import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About.page";
import Home from "../Home.page";

const Routes: FC = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
    </Switch>
  );
};

export default Routes;

import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About.page";
import Contact from "../Contact.page";
import Home from "../Home.page";

const Routes: FC = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Contact} exact path="/Contact" />
    </Switch>
  );
};

export default Routes;

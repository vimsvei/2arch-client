import React from 'react';
import {Route, Switch} from "react-router-dom";
import Welcome from "../welcome";

const Routes = () => {
  return(
    <Switch>
      <Route path="/welcome" component={Welcome} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
// import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};

export default Routes;

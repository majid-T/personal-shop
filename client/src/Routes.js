import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopItem from './components/ShopItem'
import Landing from './components/Landing'
// import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/shop-item/:id" component={ShopItem} />
        {/* <Route component={NotFound} />  */}
      </Switch>
    </section>
  );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopItem from './components/ShopItem'
import Management from './components/Management'
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/management" component={Management} />
      <Route exact path="/shop-item/:id" component={ShopItem} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;

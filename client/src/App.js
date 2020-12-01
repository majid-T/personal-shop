import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./Routes";
// import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;

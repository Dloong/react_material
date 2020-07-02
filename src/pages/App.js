import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProTip from './ProTip';
import Home from "./Home"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={ProTip} />
      </Switch>
    </Router>
  );
}
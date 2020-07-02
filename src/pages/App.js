import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProTip from './ProTip';
import Home from "./Home"
import FormDemo from "./formDemo"

const history = require('history').createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={ProTip} />
        <Route path="/form" component={FormDemo} />
      </Switch>
    </Router>
  );
}
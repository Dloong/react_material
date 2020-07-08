import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ProTip from '../pages/ProTip';
import FormDemo from "../pages/formDemo"
import Home from "../pages/Home"
import PoListPage from "../pages/PoListPage"

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/test",
        component: ProTip
    },
    {
        path: "/form",
        component: FormDemo
    },
    {
      path: "/PoList",
      component: PoListPage
    }
]

function RouterView() {
    return (
      <Router>
        <Switch>
          {routes.map(item => (
            <Route
              key={item.path}
              exact={true}
              path={item.path}
              component={
                item.component
              }
            />
          ))}
        </Switch>
      </Router>
    );
  }

  export default RouterView;
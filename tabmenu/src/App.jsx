import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import TabMenu from "./TabMenu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const App = () => (
  <Router>
    <TabMenu></TabMenu>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));

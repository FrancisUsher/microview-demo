import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

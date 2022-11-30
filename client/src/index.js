import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { DataProvider } from "./GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <DataProvider>
      <App></App>
    </DataProvider>
  </Router>
);

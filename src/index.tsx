import initGhost from "lib";
import config from "lib/ghost.config";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
initGhost(config);

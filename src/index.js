import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SettingsContextProvider from "./container/settings";

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById("root")
);

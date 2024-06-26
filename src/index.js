import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new Client({
  url: "https://countries.trevorblades.com",
  exchanges: [cacheExchange, fetchExchange],
});

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

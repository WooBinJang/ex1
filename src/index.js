import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import YoutubeService from "./netservice/YoutubeService";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtube = new YoutubeService(API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

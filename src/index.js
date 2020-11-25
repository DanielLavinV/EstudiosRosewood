import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/app.css";
import App from "./App";
// import Icon from "./images/this_is_me.jpg";
// import ProjectCardContainer from "./js/ProjectCardContainer";

console.log("rendering");

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
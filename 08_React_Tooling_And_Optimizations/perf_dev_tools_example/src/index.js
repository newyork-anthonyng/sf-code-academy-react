import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./TodoContainer";
import Perf from "react-addons-perf";
window.ReactPerf = Perf;

ReactDOM.render(
  <TodoContainer />,
  document.getElementById("app")
);

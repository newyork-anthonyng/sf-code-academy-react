import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./TodoContainer";

const App = function() {
  return <TodoContainer />
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

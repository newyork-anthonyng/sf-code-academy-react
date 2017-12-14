import React from "react";
import ReactDOM from "react-dom";

const Hello = function(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
}

ReactDOM.render(
  <Hello name="Expedia" />,
  document.getElementById("app")
);

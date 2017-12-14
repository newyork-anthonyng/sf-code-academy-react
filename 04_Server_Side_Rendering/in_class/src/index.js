import React from "react";
import ReactDOM from "react-dom";
import AmazingList from "./AmazingList";

// ReactDOM.render(
//   <AmazingList length={200} />,
//   document.getElementById("app")
// );

// Get the initial data from the server, if available
const initialData = window.initialData || 0;

ReactDOM.render(
  <AmazingList length={initialData} />,
  document.getElementById("app")
);

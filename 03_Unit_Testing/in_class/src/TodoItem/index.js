import React from "react";
import PropTypes from "prop-types";

const TodoItem = function(props) {
  return (
    <li
      onClick={() => props.onClick(props.index)}
      style={{
        textDecoration: props.completed ? "line-through" : "",
        color: props.completed ? "green" : "black",
        cursor: "pointer"
      }}
    >
      {props.text}
    </li>
  );
};
const a = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number
};
TodoItem.propTypes = a;

export default TodoItem;

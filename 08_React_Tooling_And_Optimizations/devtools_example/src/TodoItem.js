import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ text, completed, onClick }) => (
  <li
    style={{ textDecoration: completed && "line-through" }}
    onClick={onClick}
  >
    {text}
  </li>
);

TodoItem.defaultProps = {
  onClick: () => {}
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default TodoItem;

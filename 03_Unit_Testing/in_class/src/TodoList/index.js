import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";

const TodoList = function(props) {
  return (
    <ul>
      {
        props.todoItems.map((todoItem, index) => (
          <TodoItem
            key={index}
            text={todoItem.text}
            index={index}
            onClick={props.onTodoItemClick}
            completed={todoItem.completed}
          />
        ))
      }
    </ul>
  );
};

TodoList.defaultProps = {
  todoItems: []
};

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      completed: PropTypes.bool,
      index: PropTypes.number
    })
  ),
  onTodoItemClick: PropTypes.func
};

export default TodoList;

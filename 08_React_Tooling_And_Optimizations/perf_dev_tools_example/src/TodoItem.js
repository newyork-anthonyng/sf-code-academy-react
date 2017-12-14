import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { text, completed, onClick } = this.props;
    return (
      <li
        style={{
          textDecoration: completed && "line-through"
        }}
        onClick={onClick}
      >
        {text}
      </li>
    );
  }
}

TodoItem.defaultProps = {
  onClick: () => {}
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default TodoItem;

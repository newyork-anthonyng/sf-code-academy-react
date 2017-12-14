import React from "react";
import PropTypes from "prop-types";
import TodoList from "../TodoList";

class TodoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      todoItems: [
        { text: "Walk dog", completed: true },
        { text: "Learn react", completed: true }
      ]
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleButtonClick = () => {
    const newTodoItem = {
      text: this.state.inputValue,
      completed: false
    };

    this.setState({
      todoItems: this.state.todoItems.concat([newTodoItem])
    });
  }

  handleTodoItemClick = (todoItemIndex, foo) => {
    const updatedTodoItem = Object.assign({}, this.state.todoItems[todoItemIndex]);
    updatedTodoItem.completed = !updatedTodoItem.completed;

    const updatedTodoItems = this.state.todoItems.concat([]);
    updatedTodoItems[todoItemIndex] = updatedTodoItem;

    this.setState({
      todoItems: updatedTodoItems
    });
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button type="button" onClick={this.handleButtonClick}>Add todo item</button>
        </div>

        <TodoList
          todoItems={this.state.todoItems}
          onTodoItemClick={this.handleTodoItemClick}
        />
      </div>
    );
  }
}

export default TodoContainer;

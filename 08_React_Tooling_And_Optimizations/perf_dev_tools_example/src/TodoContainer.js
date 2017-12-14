import React from "react";
import TodoItem from "./TodoItem.js";
import TodoHeader from "./TodoHeader.js";
import lodash from "lodash";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        { text: "Learn React", completed: true },
        { text: "Walk dog", completed: false}
      ],
      inputValue: ""
    };
  }

  handleTodoItemClick = (index) => {
    const newTodoItems = lodash.cloneDeep(this.state.todoItems);
    newTodoItems[index].completed = !newTodoItems[index].completed;

    this.setState({
      todoItems: newTodoItems
    });
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

    const newTodoItems = this.state.todoItems.concat([newTodoItem]);

    this.setState({
      todoItems: newTodoItems
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleButtonClick}>Add todo item</button>

        <TodoHeader />

        <ul>
          {
            this.state.todoItems.map((item, index) => (
              <TodoItem
                key={index}
                onClick={() => this.handleTodoItemClick(index)}
                completed={item.completed}
                text={item.text}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoContainer;

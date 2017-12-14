import React from "react";

class TodoHeader extends React.Component {
  componentDidMount() {
    // do something ajaxy
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Thank you for using our Todo List</h1>
      </div>
    );
  }
}

export default TodoHeader;

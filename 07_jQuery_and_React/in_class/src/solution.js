import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  componentDidMount() {
    Headspace(this.header);
  }

  render() {
    return (
      <div>
        <header ref={
            (foo) => {this.header = foo;}
          }>Welcome</header>
        <input type="text" ref={(input) => {this.input = input;}} />
      </div>
    );
  }
}

class Draggable extends React.Component {
  componentDidMount() {
    $(this.draggable).draggable({
      start: this.props.start,
      stop: this.props.stop
    });
  }

  render() {
    return (
      <div
        ref={(draggable) => { this.draggable = draggable; } }
        id="draggable" className="ui-widget-content"
      >
        <p>Drag me around</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById("header")
);

function handleStart() {
  console.log("%c Awesome!!!", "background-color: chocolate; color: white");
  var header = $("h1");

  header.text("Thank you for dragging the box");
}

function handleStop() {
  var header = $("h1");

  header.text("Please drag the box");
}

ReactDOM.render(
  <Draggable
    start={handleStart}
    stop={handleStop}
  />,
  document.getElementById("draggable")
);


class CatCheckboxContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: [true, false, true]
    };
  }

  render() {
    return (
      <div>
        {
          this.state.checked.map((check, index) => {
            return <cat-checkbox key={index} checked={check || null} />
          })
        }
      </div>
    );
  }
}

ReactDOM.render(
  <CatCheckboxContainer />,
  document.getElementById("cats")
);

import React from "react";
import ReactDOM from "react-dom";

class MouseCoordinateGetter extends React.Component {
  constructor() {
    super();

    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    return (
      <div>
        <Coordinates x={this.state.x} y={this.state.y} />
        <Cat x={this.state.x} y={this.state.y} />
      </div>
    );
  }
}

class Cat extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.x > 100;
  }

  render() {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          position: "fixed",
          left: this.props.x,
          top: this.props.y
        }}
      >
        <img style={{ width: "100%" }} src="http://res.freestockphotos.biz/pictures/16/16547-illustrated-silhouette-of-a-black-cat-pv.png" alt="Cat" />
      </div>
    );
  }
}

const Coordinates = function(props) {
  return (
    <h1>Coordinates: {props.x}, {props.y}</h1>
  );
};

const App = function() {
  return (
    <div>
      <MouseCoordinateGetter />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

import React from "react";

class MouseCoordinateGetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseCoordinateX: 0,
      mouseCoordinateY: 0
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = e => {
    this.setState({
      mouseCoordinateX: e.clientX,
      mouseCoordinateY: e.clientY
    });
  };

  render() {
    return React.cloneElement(this.props.children, {
      x: this.state.X,
      y: this.state.y,
    })
    // return this.props.children({
    //   x: this.state.mouseCoordinateX,
    //   y: this.state.mouseCoordinateY
    // });
  }
}

  export default MouseCoordinateGetter;

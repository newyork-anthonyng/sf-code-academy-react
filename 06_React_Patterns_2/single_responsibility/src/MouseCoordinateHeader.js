import React from "react";

class MouseCoordinateHeader extends React.Component {
  render() {
    const { x, y } = this.props;

    return (
      <h3>
        x: {x}, y: {y}
      </h3>
    );
  }
}

export default MouseCoordinateHeader;

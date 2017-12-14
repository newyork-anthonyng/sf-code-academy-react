import React from "react";
import ReactDOM from "react-dom";
import createOscillator from "./createOscillator";

class App extends React.Component {
  componentDidMount() {
    this.oscillator = createOscillator();
  }

  play = () => {
    this.oscillator.play();
  }

  stop = () => {
    this.oscillator.stop();
  }

  changeTone = (event) => {
    const { clientX, clientY } = event;
    const { top, right, bottom, left } = event.target.getBoundingClientRect();
    const pitch = (clientX - right) / (right - left);
    // Subtract 1, so that volume increases as you go up the screen
    const volume = 1 - ((clientY - top) / (bottom - top));

    this.oscillator.setPitchBend(pitch);
    this.oscillator.setVolume(volume);
  }

  render() {
    const thereminStyle = {
      backgroundColor: "tomato",
      border: "1px solid black",
      cursor: "crosshair",
      display: "inline-block",
      height: 200,
      width: 200
    };

    return (
      <div
        style={thereminStyle}
        onMouseEnter={this.play}
        onMouseLeave={this.stop}
        onMouseMove={this.changeTone}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

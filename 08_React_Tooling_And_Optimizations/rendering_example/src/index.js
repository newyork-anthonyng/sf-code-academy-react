import React from "react";
import ReactDOM from "react-dom";

class Name extends React.Component {
  shouldComponentUpdate(nextProps) {
    // return true;
    return nextProps.names !== this.props.names;
  }

  render() {
    console.log("Name is rendering");
    return (
      <ul>
        {
          this.props.names.map((name) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
    this.names = ["Steph", "Kevin", "Klay"]
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  test = () => {
    console.log("hello");
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <Name
          names={this.names}
          onChange={this.test}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

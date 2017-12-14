import React from "react";
import ReactDOM from "react-dom";
import * as styles from "./styles";

class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    };
  }

  selectTabIndex(index) {
    this.setState({
      activeIndex: index
    });
  }

  renderTabs() {
    return this.props.data.map((tab, index) => {
      const isActive = this.state.activeIndex === index;

      return (
        <div
          key={tab.label}
          style={isActive ? styles.activeTab : styles.tab}
          onClick={() => this.selectTabIndex(index)}
        >{tab.label}</div>
      );
    });
  }

  renderPanel() {
    const tab = this.props.data[this.state.activeIndex];
    return (
      <div>{tab.description}</div>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );
  }
}

const App = function() {
  const tabData = [
    {
      label: "The Dark Knight",
      description: <p>The Joker is mean</p>
    },
    {
      label: "Inception",
      description: <p>Dream inside a dream</p>
    },
    {
      label: "mother!",
      description: <p>What??</p>
    }
  ];

  return (
    <Tabs data={tabData} />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

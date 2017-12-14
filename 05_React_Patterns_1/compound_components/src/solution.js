import React from "react";
import ReactDOM from "react-dom";
import * as styles from "./styles";

class TabList extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(
        child,
        {
          isActive: index === this.props.activeIndex,
          onClick: () => this.props.onActivate(index)
        }
      );
    });

    return (
      <div>{children}</div>
    );
  }
}

class Tab extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.isDisabled ? null : this.props.onClick}
        style={this.props.isDisabled ? styles.disabledTab : (
          this.props.isActive ? styles.activeTab : styles.tab
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

class TabPanels extends React.Component {
  render() {
    return (
      <div style={styles.tabPanels}>
        {this.props.children[this.props.activeIndex]}
      </div>
    );
  }
}

class TabPanel extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}


class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      if (child.type === TabPanels) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex
        });
      } else if (child.type === TabList) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
          onActivate: (activeIndex) => this.setState({ activeIndex })
        });
      } else {
        return child;
      }
    });

    return <div>{children}</div>
  }
}

const App = function() {
  return (
    <Tabs>
      <TabPanels>
        <TabPanel>
          <p>The Joker is mean</p>
        </TabPanel>
        <TabPanel>
          <p>Dream inside a dream</p>
        </TabPanel>
        <TabPanel>
          <p>What??</p>
        </TabPanel>
      </TabPanels>

      <TabList>
        <Tab>The Dark Knight</Tab>
        <Tab>Inception</Tab>
        <Tab>mother!</Tab>
      </TabList>

    </Tabs>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

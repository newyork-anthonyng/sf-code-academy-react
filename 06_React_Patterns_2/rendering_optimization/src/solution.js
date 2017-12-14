import React from "react";
import ReactDOM from "react-dom";

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableHeight: 0,
      scrollTop: 0
    };
  }

  componentDidMount() {
    this.setState({
      availableHeight: window.innerHeight
    });
  }

  handleScroll = event => {
    this.setState({
      scrollTop: event.target.scrollTop
    });
  };

  render() {
    const { rows } = this.props;
    const rowHeight = 20;
    const totalHeight = rowHeight * rows;

    const { availableHeight, scrollTop } = this.state;
    const scrollBottom = scrollTop + availableHeight;

    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 20);
    const endIndex = Math.min(rows, Math.ceil(scrollBottom / rowHeight) + 20);

    const items = [];

    for (let i = startIndex; i <= endIndex; i += 1) {
      items.push(
        <li key={i} style={{ height: rowHeight, fontSize: rowHeight - 4 }}>
          {i}
        </li>
      );
    }

    return (
      <div
        style={{ height: "100%", overflowY: "scroll" }}
        onScroll={this.handleScroll}
      >
        <ol
          style={{
            paddingTop: startIndex * rowHeight,
            pointerEvents: "none",
            height: totalHeight,
            listStyle: "none"
          }}
        >
          {items}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<ListView rows={500000} />, document.getElementById("app"));

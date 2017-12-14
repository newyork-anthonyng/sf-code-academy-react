import React from "react";

class PageLayout extends React.Component {
  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    };
    const headerStyle = {
      border: "1px solid black",
    };
    const bodyStyle = {
      border: "1px solid green",
      overflow: "scroll"
    };
    const footerStyle = {
      border: "1px solid red"
    };

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          {this.props.header}
        </div>

        <div style={bodyStyle}>
          {this.props.body}
        </div>

        <footer style={footerStyle}>
          {this.props.footer}
        </footer>
      </div>
    );
  }
}

export default PageLayout;

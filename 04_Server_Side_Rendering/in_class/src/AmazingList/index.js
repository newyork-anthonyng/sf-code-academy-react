import React from "react";
import PropTypes from "prop-types";
import colorGenerator from "../utility/colorGenerator";

// const AmazingList = function(props) {
class AmazingList extends React.Component {
  componentDidMount() {
    console.log("%c AmazingList did mount!!!", 'background-color: tomato; font-size: 24px;')
  }

  render() {
    const colors = colorGenerator(this.props.length);

    return (
      <ul style={{ listStyle: "none" }}>
        {
          colors.map((color, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                height: "25px",
                backgroundColor: color
              }}
              />
          ))
        }
      </ul>
    );
  }
};

AmazingList.defaultProps = {
  length: 0
};

AmazingList.propTypes = {
  length: PropTypes.number
};

export default AmazingList;

import React from "react";
import ReactDOM from "react-dom";
import PageLayout from "./PageLayout";
import MouseCoordinateHeader from "./MouseCoordinateHeader";
import DataGetter from "./DataGetter";
import MouseCoordinateGetter from "./MouseCoordinateGetter";

class App extends React.Component {
  render() {
    return (
      <PageLayout
        header={
          <MouseCoordinateGetter>
            {({ x, y }) => {
              return <MouseCoordinateHeader x={x} y={y} />;
            }}
          </MouseCoordinateGetter>
        }
        body={
          <DataGetter>
            {({ posts }) => {
              return (
                <ul>
                  {posts.map((post, i) => (
                    <li key={i}>
                      <div>
                        <h1>{post.name}</h1>
                        <p>{post.email}</p>
                        <p>{post.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              );
            }}
          </DataGetter>
        }
        footer={<h1>I am the footer</h1>}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

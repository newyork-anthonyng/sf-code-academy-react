import React from "react";
import fetchData from "./fetchData";

class DataGetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetchData().then(posts => {
      this.setState({
        posts: posts
      });
    });
  }

  render() {
    const newPosts = this.state.posts.map((post) => {
      return {
        name: post.foobar,
        email: post.email,
        body: post.body
      }
    });
    return this.props.children({ posts: newPosts });
  }
}

export default DataGetter;

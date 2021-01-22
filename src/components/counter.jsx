import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // imageURL:'https://picsum.photos/200'
    tags: ["tag1", "tag2", "tag3" ],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  render() {
      {this.state.tags.length === 0 && 'Please create a tag'}
    return <div>{this.renderTags()}</div>;
  }
}

export default Counter;

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // imageURL:'https://picsum.photos/200'
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //object destructuring
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

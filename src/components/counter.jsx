import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageURL:'https://picsum.photos/200'
  };
  styles = {
      fontSize: 10,
      fontWeight: 'bold'
  };
  render() {
      // we have to pass a javascript object in the style attribute
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state; //object destructuring
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

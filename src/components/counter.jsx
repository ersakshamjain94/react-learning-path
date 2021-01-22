import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  // either bind this to current object for having reference or use arrow functions
  //constructor() {
    //super();
    //this.handleIncrement = this.handleIncrement.bind(this);
 // }
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  handleIncrement = () =>{
    console.log("increment clicked", this);
    //obj.method() - > this returns referencee to obj
    // function() - > this returns undefined or window object depending on strict mode
    //we use bind method to solve the problem
  }
  render() {
    // render the className dynamically
    // we are passing reference of function in onClick and not calling the function
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
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

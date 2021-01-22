import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  handleIncrement = () =>{ 
   // this.state.count++; // doesnt work
   this.setState({count:this.state.count+1}) // react updates the state property and inside that overrides count with new value
   //if value doesnt exist react will merge the value
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

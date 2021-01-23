import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  handleIncrement = (product) => {
    console.log(product)
    this.setState({ value: this.state.value + 1 }); // react updates the state property and inside that overrides count with new value
    //if value doesnt exist react will merge the value
    //this.setSTate schedules a call to render the method we do not know when its an async call
  };
  render() {
    // render the className dynamically
    // we are passing reference of function in onClick and not calling the function
    console.log('props',this.props) //props has children
    return (
      <div>
          {this.props.children}; 
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state; //object destructuring
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

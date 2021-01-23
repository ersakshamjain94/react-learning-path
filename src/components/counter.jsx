import React, { Component } from "react";

class Counter extends Component {

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  
  // Rule of thumb  cComponent that owns a piece of state should be the one modifying it
  // In our case Components is the component owning piece of state hence it should be one modifying it
  // we have to raise event from Child to parent Counter component will raise the event, Counters will handle the eevent
  // we will have a method in Counters component and pass the reference of that method via prop to the Counter component
  //Counter component then can use that prop reference of function to change state in counters
  //onDelete is the name of our prop
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; //object destructuring
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

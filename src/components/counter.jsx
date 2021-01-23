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
    console.log(product);
    this.setState({ value: this.state.value + 1 }); // react updates the state property and inside that overrides count with new value
    //if value doesnt exist react will merge the value
    //this.setSTate schedules a call to render the method we do not know when its an async call
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
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
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

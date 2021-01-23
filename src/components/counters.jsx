import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
      const {onReset , onDelete, onIncrement , counters} = this.props //object destructuring 
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component, useEffect, useState } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log("component mounted");
    // good place for data fetching
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("will deleted");
  }

  render() {
    return (
      <div className="border border-red-200 w-[200px] p-5">
        <div>
          {this.state.counter}
          <button onClick={() => this.setState({ counter: this.counter + 1 })}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export function LifecycleFunc() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("from useEffect");
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [counter]);

  useEffect(() => {
    return () => console.log("unmounted");
  }, []);

  return (
    <div>
      Lifecycle
      <div>
        <button>-</button>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
}

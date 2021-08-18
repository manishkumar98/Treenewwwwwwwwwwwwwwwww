import React from "react";
//import ReactDOM from 'react-dom'
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

export default function Parent() {
  const [list, setList] = useState([0]);
  const [count, setCount] = useState(0);
  const addComponent = () => {
    setList([...list, list.length]);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const handleCross = () => {};
  return (
    <>
      <p>{count}</p>
      {list.map((item, id) => (
        <Parent key={id} />
      ))}
      <br />
      <br />
      <button onClick={increment}>+</button>
      <button onClick={handleCross}>x</button>
      <button onClick={addComponent}>Add more child</button>
      <p>Counter : {count}</p>
    </>
  );
}

/*
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: 0,
      count: 0
      // f: 0
    };
  }
  addChild(key, value) {
    this.setState({ [key]: value + 1 });
    //this.setState({ f: 1 });
    console.log(value);
  }

  handleCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <>
        <p>{this.state.child_count}</p>

        <br />
        <br />
        <button onClick={() => this.handleCount()}>+</button>
        <button onClick={() => this.handleCross()}>x</button>
        <button onClick={() => this.handleMoreChild()}>Add more child</button>
        <p>Counter : {this.state.count}</p>
      </>
    );
  }
}

export default Parent;
/*
{
<button
          onClick={() => {
            this.addChild(this.state.parent, this.state.child_count);
          }}
        >
          Add child
        </button>
}

*/

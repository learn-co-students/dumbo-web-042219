import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from 'redux'


const defaultState = { count: 0 }

// console.log(createStore)
const reducer = (state = defaultState, action) => {
  console.log('state', state)
  console.log('action', action)

  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { count: state.count + action.count }
      break;

    case 'DECREMENT_COUNT':
      return { count: state.count - action.count }
      break;

    default:
      return state
  }
}

// INCREMENT THE COUNT BY 3
// INCREMENT THE COUNT BY 5
// DECREMENT THE COUNT BY 3
// DECREMENT THE COUNT BY 5


const store = createStore(reducer)

// redux to manage this; { count: 0 }

class App extends Component {
  // state = {
  //   count: 0
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  increment = () => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    store.dispatch({ type: "INCREMENT_COUNT", count: 1})
  };

  decrement = () => {
    store.dispatch({ type: "DECREMENT_COUNT", count: 100})
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

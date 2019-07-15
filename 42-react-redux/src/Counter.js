import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  increment = () => {
    this.props.incrementCount()
  }

  decrement = () => {
    this.props.decrementCount()
  }

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

// this is my getter for redux for a component
const mapStateToProps = (state, props) => {
  return { count: state.count }
}

// this is my setter for redux for a component
const mapDispatchToProps = (dispatch, props) => {

  return {
    incrementCount: () => {
      dispatch({ type: "INCREMENT_COUNT", count: 5})
    },
    decrementCount: () => {
      dispatch({ type: "DECREMENT_COUNT", count: 1})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

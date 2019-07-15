import React, { Component } from 'react'
import logo from "./logo.svg";
import { connect } from 'react-redux'

class Header extends Component {

  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
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

// this is my getter for redux for a component
const mapStateToProps = (state, props) => {
  return { count: state.count }
}

export default connect(mapStateToProps)(Header)















//

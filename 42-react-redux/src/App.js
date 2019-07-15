import React, { Component } from 'react'
import Header from './Header.js'
import Counter from './Counter.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header someRandoProp="hhhhiiiii, im here!" anotherOne="hi"/>
        <Counter />
      </div>
    );
  }
}

export default App

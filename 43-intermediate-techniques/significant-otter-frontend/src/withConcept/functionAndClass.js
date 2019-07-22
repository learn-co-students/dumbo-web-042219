import React, { Component } from 'react';

function myCoolFunction() {}

class MyComponent extends Component {
  render() {
    console.log('cool component props', this.props);
    console.log('cool component state', this.state);

    return <h1>"hola!"</h1>
  }
}

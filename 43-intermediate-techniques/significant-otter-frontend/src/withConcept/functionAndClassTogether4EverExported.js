import React, { Component } from 'react';

export default function myCoolFunction() {

  // see how we're just returning the component?!
  return class MyComponent extends Component {
    render() {
      console.log('cool component props', this.props);
      console.log('cool component state', this.state);

      return "hola!"
    }
  }
}

import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    render() {
      console.log('withAdBeginning props', this.props)
      console.log('withAdBeginning state', this.state)

      return <WrappedComponent />
    }
  }
}

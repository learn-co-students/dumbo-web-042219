import React, { Component } from 'react';
import withConcept from './functionAndClassTogether4EverExported';

class App extends Component {

  render() {
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withConcept(App);

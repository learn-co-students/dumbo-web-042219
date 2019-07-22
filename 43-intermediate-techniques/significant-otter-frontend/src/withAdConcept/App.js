import React, { Component } from 'react';
// import withAd from './withAdBeginning';
import withAd from './withAdSoFetch';

class App extends Component {

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withAd(App);

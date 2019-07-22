import React, { Component } from 'react';
// import withAuth from './withAuthWithoutRouterNorRedux';
// import withAuth from './withAuthWithRouterNoRedux';
// import withAuth from './withAuthWithoutRouterWithRedux';
// import withAuth from './withAuthWithRouterWithRedux';
import withAuth from './withAuthWithoutRouterWithReduxWithThunk';
// import withAuth from './withAuthWithRouterWithReduxWithThunk';
import { Route } from 'react-router-dom'


class App extends Component {

  // render() {
  //   return (
  //     <div>Hello {this.props.user.name}!</div>
  //   );
  // }

  // USE THIS TO TEST withAuth USING REACT ROUTER
  render() {
    return (
      <div>
        <Route exact path="/login" render={props => {
          return "hello"
        }}/>
        Hello
      </div>
    )
  }
}

export default withAuth(App);

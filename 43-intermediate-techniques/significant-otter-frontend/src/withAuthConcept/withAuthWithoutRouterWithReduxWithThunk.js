import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './authActions'

export default function(WrappedComponent) {
  class WrapperComponent extends Component {
    componentDidMount() {
      // When the component (and WrappedComponent) mounts,
      // we'll check to see if there's a token, and if there is
      // we'll make a fetch to `/api/v1/profile` to verify
      // that the user is logged in and get their information.

      // If there's no token in localStorage, don't try to
      // send a request to `/api/v1/profile`!
      if (!localStorage.token) {
        return
      }

      this.props.logIn()
    }

    render() {
      if (this.props.fetching && !this.props.loggedIn) {
        return "Logging in!"
      } else if (this.props.loggedIn) {
        return <WrappedComponent {...this.props} />
      } else {
        return "Please log in"
      }
    }
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      loggedIn: state.auth.loggedIn,
      currentUser: state.auth.currentUser
    }
  }

  return connect(mapStateToProps, actions)(WrapperComponent)
}

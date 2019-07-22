import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent) {
  class WrapperComponent extends Component {
    fetchProfile = () => {
      // If there's a token, we don't need the else here...
      return fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      }).then(this.stopFetching)
        .then(this.checkStatus)
        .then(resp => resp.json())
        .then(this.checkServerMessage)
        .then(data => {
          this.props.logIn(data.otter)
        })
        .catch(this.catchStatus)
    }

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

      this.props.startFetching()
      this.fetchProfile()
    }

    stopFetching = (thing) => {
      this.props.stopFetching()

      return thing
    }

    checkStatus = (response) => {
      // If the status of the response is 401,
      // that means that the token in localStorage
      // was incorrect. Don't let anyone hack your site!
      // We throw an error here so that we can decide how to deal
      // with the situation later. HANDLING IT!
      if (response.status === 401) {
        throw new Error("Unauthorized")
      }

      // We're using this in a promise chain. The next step is response.json()
      return response
    }

    checkServerMessage = (data) => {
      // Your server might send a message that says "Please log in"
      // and maybe you're not sending a 401 status! This is just another
      // safety check. :)
      if (data.message === "Please log in") {
        throw new Error("Unauthorized")
      }

      // We're using this in a promise chain. The next step is setting state
      return data
    }


    catchStatus = (error) => {
      if (error.message === "Unauthorized") {
        // Right now, we don't really have to do anything.
        // We could set the state of `loggedIn` to false
        // and reset the user, but if you're not using Redux
        // or React Router, then you can leave this empty!
      }
    }

    render() {
      if (this.props.fetching && !this.props.loggedIn) {
        return "Logging in!"
      } else if (this.props.loggedIn) {
        return <WrappedComponent {...this.props} />
      } else {
        return "Please log in!"
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      fetching: state.auth.fetching,
      loggedIn: state.auth.loggedIn,
      user: state.auth.currentUser
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      logIn: function(currentUser) {
        dispatch({
          type: "LOG_IN",
          currentUser
        })
      },
      startFetching: function() {
        dispatch({ type: "FETCHING_START" })
      },
      stopFetching: function() {
        dispatch({ type: "FETCHING_END" })
      },
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent)
}

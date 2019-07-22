import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    // By default, we'll assume a user is not logged in
    state = {
      fetching: false,
      loggedIn: false,
      currentUser: {}
    }

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
          this.setState({
            loggedIn: true,
            currentUser: data.otter
          })
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

      this.setState({ fetching: true }, this.fetchProfile)
    }

    stopFetching = (thing) => {
      this.setState({ fetching: false })

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
      if (this.state.fetching && !this.state.loggedIn) {
        return "Logging in!"
      } else if (this.state.loggedIn) {
        return <WrappedComponent
          loggedIn={this.state.loggedIn}
          user={this.state.currentUser}
          {...this.props} />
      } else {
        return "Please log in!"
      }
    }
  }
}

export function logIn() {
  return function(dispatch) {
    return fetch('http://localhost:3000/api/v1/profile', {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    }).then((thing) => {
      dispatch({ type: "FETCHING_END" })

      return thing
    }).then((response) => {
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
    }).then(response => {
      return response.json()
    }).then((data) => {
      // Your server might send a message that says "Please log in"
      // and maybe you're not sending a 401 status! This is just another
      // safety check. :)
      if (data.message === "Please log in") {
        throw new Error("Unauthorized")
      }

      // We're using this in a promise chain. The next step is setting state
      return data
    }).then(data => {
      dispatch({
        type: "LOG_IN",
        currentUser: data.otter
      })
    }).catch((error) => {
      if (error.message === "Unauthorized") {
        // Right now, we don't really have to do anything.
        // We could set the state of `loggedIn` to false
        // and reset the user, but if you're not using Redux
        // or React Router, then you can leave this empty!
      }
    })
  }
}

export function startFetching() {
  return { type: "FETCHING_START" }
}

export function stopFetching() {
  return { type: "FETCHING_END" }
}

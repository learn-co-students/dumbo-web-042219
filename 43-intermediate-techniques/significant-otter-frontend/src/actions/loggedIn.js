// logIn action creator
//
// By default, action creators will always return objects.
// These objects will be passed to `dispatch()` when called
// and tell the reducer how to update the state.
export function logIn() {
  return {
    type: 'LOGGED_IN'
  }
}

// logInAsync action creator
//
// Using the `redux-thunk` middleware, instead of returning
// a POJO (plain old JavaScript object) from the action creator,
// we can return a function! This returned function will always
// be called with the `dispatch` function as the first argument.
//
// We do this so that we can move our asynchronous updating from
// our components and into the action creators to better separate
// concerns. The component doesn't need to know how to make this
// request, it just needs to make sure that the request is made.
export function logInAsync() {

  // This is the function that we're returning FROM the action creator.
  return function(dispatch) {

    // A common pattern when using thunk is to dispatch an action which
    // signifies the start of some asynchronous work. If you have a
    // corresponding piece of state for this action (like `isLoggingIn`)
    // then you can set that state to `true` and display a loading
    // spinner for your user.
    dispatch({
      type: 'LOGGING_IN'
    })

    // If we want to stop this function from running (for example, if
    // we know right away that our user is not logged in), we can
    // always throw an error. Whenever we throw an error, we should
    // make sure to catch it somewhere else! Check our `withAuth`
    // higher-order component for the catch block.
    if (!localStorage.token) {
      throw new Error("Please log in")
    }

    // Next, we can kick off our async action. You'll notice
    // that we're returning the call to `fetch` here. This is
    // important because we can then `.catch` any errors if we're
    // doing some error handling. Check our `withAuth` higher-order
    // component for the `.catch`!
    return fetch('http://localhost:3000/api/v1/profile', {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    }).then(res => {

      // More error handling. If our request is unauthorized,
      // let the component `.catch` the error we're throwing
      if (res.status === 401) {
        throw new Error("Unauthorized")
      }
      return res.json()
    }).then(() => {

      // Finally, once the request is finished, we can let the
      // reducer know to make the change to state that we want.
      dispatch({
        type: 'LOGGED_IN'
      })
    })
  }
}

const loggedInDefault = false

export default (state = loggedInDefault, action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'LOGIN_REQUEST_SUCCESS':
      return true
    default:
      return state
  }
}

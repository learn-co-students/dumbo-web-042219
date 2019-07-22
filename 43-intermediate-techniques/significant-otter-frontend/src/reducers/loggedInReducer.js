const loggedInDefault = false

export default function(state = loggedInDefault, action) {
  // console.log(action.type);
  switch (action.type) {
    case 'LOGGED_IN':
      return true
    default:
      return state
  }
}

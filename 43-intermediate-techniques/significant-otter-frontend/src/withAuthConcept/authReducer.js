const defaultState = {
  fetching: false,
  loggedIn: false,
  currentUser: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loggedIn: true,
        currentUser: action.currentUser
      }
    case "FETCHING_START":
      return {
        ...state,
        fetching: true
      }
    case "FETCHING_END":
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}

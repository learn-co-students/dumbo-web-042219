const defaultState = {
  id: null,
  username: '',
  problems: [],
  down_voted_problems: [],
  up_voted_problems: [],
  loading: false,
}

export default (state = defaultState, action) => {
  // console.log('in root reducer', action);

  switch (action.type) {
    case 'LOGIN_REQUEST_START':
      return {...state, loading: true}
    case 'GET_PROFILE_REQUEST_SUCCESS':
    case 'LOGIN_REQUEST_SUCCESS':
      return {...action.user, loading: false}
    case 'LOGIN_REQUEST_FAILURE':
      return {...state, loading: false}
    case 'LOGOUT':
      return defaultState
    default:
      return state
  }
}

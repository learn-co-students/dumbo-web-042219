const defaultState = {
  id: null,
  name: '',
  email: '',
  interests: ''
}

export default function(state = defaultState, action) {
  // console.log('in root reducer', action);

  switch (action.type) {
    case 'SET_CURRENT_OTTER':
      return action.currentOtter
    default:
      return state
  }
}

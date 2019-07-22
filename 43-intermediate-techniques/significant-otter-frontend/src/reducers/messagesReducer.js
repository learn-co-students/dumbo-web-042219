const defaultState = []

export default function(state = defaultState, action) {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'SET_INITIAL_MESSAGES':
      return action.messages
    default:
      return state
  }
}

const defaultState = []

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'GET_PROBLEMS_SUCCESS':
      return action.problems
    default:
      return state
  }
}

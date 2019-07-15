const defaultState = { count: 0, firstName: "kevin", lastName: "yo"}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + action.count }

    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - action.count }

    case "UPDATE_LASTNAME":
      return { ...state, lastName:  action.lastName }

    default:
      return state
  }
}

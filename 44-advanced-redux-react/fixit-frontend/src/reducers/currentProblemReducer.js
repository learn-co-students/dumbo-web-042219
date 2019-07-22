const defaultState = {
  id: null,
  title: '',
  description: '',
  up_votes: null,
  down_votes: null,
  author_id: null,
  author_username: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_PROBLEM_SUCCESS':
      return action.problem
    default:
      return state
  }
}

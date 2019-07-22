import { combineReducers } from 'redux'
import problems from './problemsReducer'
import currentProblem from './currentProblemReducer'
import currentUser from './currentUserReducer'
import loggedIn from './loggedInReducer'

export default combineReducers({
  problems,
  currentProblem,
  currentUser,
  loggedIn,
})

import { combineReducers } from 'redux'
import messages from './messagesReducer'
import currentOtter from './currentOtterReducer'
import loggedIn from './loggedInReducer'

import auth from '../withAuthConcept/authReducer'

export default combineReducers({
  messages,
  currentOtter,
  loggedIn,
  auth
})

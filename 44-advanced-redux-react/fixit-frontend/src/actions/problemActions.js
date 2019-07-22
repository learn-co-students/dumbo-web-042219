import { getProblemsStart, getProblemsSuccess, getProblemsFailure } from './actionCreators'
export const getProblems = () => dispatch => {
  // dispatch({ type: "GET_PROBLEMS_START" })
  dispatch(getProblemsStart())
  return fetch('http://localhost:3000/api/v1/problems', {
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
  .then(problems => {
    // dispatch({ type: 'GET_PROBLEMS_SUCCESS', problems: problems })
    dispatch(getProblemsSuccess(problems))
  })
  .catch(error => {
    // dispatch({ type: 'GET_PROBLEMS_FAILURE', error: error })
    dispatch(getProblemsFailure(error))
  })
}

export const getCurrentProblem = (id) => dispatch => {
  dispatch({ type: "GET_CURRENT_PROBLEM_START" })

  return fetch(`http://localhost:3000/api/v1/problems/${id}`, {
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
  .then(problem => {
    dispatch({ type: 'GET_CURRENT_PROBLEM_SUCCESS', problem: problem })
  })
  .catch(error => {
    dispatch({ type: 'GET_CURRENT_PROBLEM_FAILURE', error: error })
  })
}

export const upVoteProblem = (id) => dispatch => {
  dispatch({ type: "GET_CURRENT_PROBLEM_START" })

  return fetch(`http://localhost:3000/api/v1/problems/${id}/upvote`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
  .then(problem => {
    dispatch({ type: 'GET_CURRENT_PROBLEM_SUCCESS', problem: problem })
  })
  .catch(error => {
    dispatch({ type: 'GET_CURRENT_PROBLEM_FAILURE', error: error })
  })
}

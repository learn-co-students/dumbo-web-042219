const GET_PROBLEMS_START = "GET_PROBLEMS_START"

export const getProblemsStart = () => (
  { type: GET_PROBLEMS_START }
)
export const getProblemsSuccess = (problems) => (
  { type: "GET_PROBLEMS_SUCCESS", problems: problems }
)
export const getProblemsFailure = (error) => {
  return { type: "GET_PROBLEMS_FAILURE", error: error }
}

// dispatch({ type: "GET_PROBLEMS_START" })

// dispatch({ type: 'GET_PROBLEMS_SUCCESS', problems: problems })

// dispatch({ type: 'GET_PROBLEMS_FAILURE', error: error })

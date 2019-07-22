import React, { Component } from 'react'
import { connect } from 'react-redux'
import Problem from '../components/Problem'
import { getCurrentProblem } from '../actions/problemActions'

class ProblemShowPage extends Component {
  componentDidMount() {
    this.props.getProblem(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        {
          this.props.problem.id ?
          <Problem {...this.props.problem}/> :
          <h1>Loading the problem...</h1>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    problem: state.currentProblem
  }
}

const mapDispatchToProps = {
  getProblem: getCurrentProblem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemShowPage)

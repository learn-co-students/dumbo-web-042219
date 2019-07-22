import React, { Component } from 'react'
import { connect } from 'react-redux'
import Problem from '../components/Problem'
import { getProblems } from '../actions/problemActions'

class ProblemsIndexPage extends Component {
  componentDidMount() {
    this.props.getProblems()
  }

  render() {
    return (
      <div>
        {this.props.problems.map(problem => <Problem key={problem.id} {...problem}/>)}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    problems: state.problems
  }
}

const mapDispatchToProps = {
  getProblems: getProblems
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsIndexPage)

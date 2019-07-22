import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../actions/userActions'
import withAuth from '../hocs/withAuth'
import Problem from '../components/Problem'

class ProfilePage extends Component {

  render() {
    return (
      <div>
      <h1> {this.props.user.username ? `Hello ${this.props.user.username}!` : 'Getting your profile...'}</h1>
      {this.props.user.problems.map(problem => <Problem key={problem.id} {...problem}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)))

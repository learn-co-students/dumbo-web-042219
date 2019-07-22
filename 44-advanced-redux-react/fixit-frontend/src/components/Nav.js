import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser, logOut } from '../actions/userActions'

class Nav extends Component {
  componentDidMount() {
      this.props.setUser()
  }
  onLogout = () => {
    this.props.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        {
          this.props.user.id ? (
            <div>
              <Link style={{marginLeft: 15}} to="/profile">Profile</Link>
              <Link style={{marginLeft: 15}} to="/problems">Problems</Link>
              <button onClick={this.onLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link style={{marginLeft: 15}} to="/signup">Signup</Link>
              <Link style={{marginLeft: 15}} to="/login">Login</Link>
              <Link style={{marginLeft: 15}} to="/problems">Problems</Link>
            </div>
          )
        }
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
  setUser: getCurrentUser,
  logOut: logOut
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))

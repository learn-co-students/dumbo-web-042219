import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions/userActions'

class SignupPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.history.push("/profile")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state.username, this.state.password)
      .then(()=> {
        this.props.history.push("/profile")
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
        <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
        <input type="submit" value="Log in!" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    signUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)

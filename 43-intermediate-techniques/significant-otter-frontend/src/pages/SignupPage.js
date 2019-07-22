import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layouts from '../layouts'

class SignupPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    interests: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(resp => resp.json())
      .then(({ otter, token }) => {
        this.props.setCurrentOtter(otter)
        localStorage.token = token
        this.props.history.push("/profile")
      })
  }

  render() {
    return (
      <Layouts.Base title="Sign up">
        <form onSubmit={this.handleSignup}>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <textarea name="interests" value={this.state.interests} onChange={this.handleChange} />
          <input type="submit" value="Sign up!" />
        </form>
      </Layouts.Base>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentOtter: function(currentOtter) {
      dispatch({ type: 'SET_CURRENT_OTTER', currentOtter })
    }
  }
}

export default connect(null, mapDispatchToProps)(SignupPage);

import React from 'react';

class SignupPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(parsedResponse => {
        localStorage.setItem('token', parsedResponse.token) 
        this.props.history.push('/')
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
        <input type="submit" value="Signup!" />
      </form>
    );
  }
}

export default SignupPage;

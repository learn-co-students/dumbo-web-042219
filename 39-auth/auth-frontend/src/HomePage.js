import React from 'react';

class HomePage extends React.Component {
  state = {
    username: ''
  }
  componentDidMount() {
    fetch('http://localhost:3001/profile', {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(profileInfo => this.setState({ username: profileInfo.username }))
  }

  render() {
    return <h1> {this.state.username ? `Hello ${this.state.username}!` : 'Getting your profile...'}</h1>
  }
}

export default HomePage;

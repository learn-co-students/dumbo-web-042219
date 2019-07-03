import React from 'react';

class IndexPage extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    fetch('http://localhost:3001/profile', {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    }).then(resp => resp.json())
      .then(userData => this.setState({user: userData}))
  }

  render() {
    return `Hello from ${this.state.user.username}`
  }
}

export default IndexPage;

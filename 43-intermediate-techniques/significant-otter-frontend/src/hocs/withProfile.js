import React from 'react';

export default function withProfile(ComponentToBeWrapped) {
  return class Something extends React.Component {
    state = {
      user: {}
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      }).then(resp => resp.json()).then(data => {
        this.setState({
          user: data.otter
        })
      })
    }

    render() {
      return <ComponentToBeWrapped user={this.state.user} />
    }
  }
}

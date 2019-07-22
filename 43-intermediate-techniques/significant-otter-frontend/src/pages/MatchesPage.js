import React, { Component } from 'react';
import Layouts from '../layouts'

class MatchesPage extends Component {
  state = {
    matches: []
  }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/login")
    }

    if (!!localStorage.token) {
      fetch('http://localhost:3000/api/v1/matches', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }).then(res => {
        if (res.status === 401) {
          throw new Error("Unauthorized")
        }

        return res.json()
      }).then(matches => {
        this.setState({ matches })
      }).catch(e => {
        this.props.history.push("/login")
      })
    }
  }

  renderMatches = () => {
    return (
      <ul>
        {this.state.matches.map(match => {
          return <li key={match.id}>{match.name}</li>
        })}
      </ul>
    )
  }


  render() {
    return (
      <Layouts.List title="matches">
        {this.renderMatches()}
      </Layouts.List>
    );
  }

}

export default MatchesPage;

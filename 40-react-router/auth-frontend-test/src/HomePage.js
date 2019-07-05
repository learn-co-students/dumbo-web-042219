import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.user.username ? `Hello ${this.props.user.username}!` : 'Getting your profile...'}</h1>
        <Link to='/messages'>see my messages</Link>
      </div>
    )
  }
}

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <h1> {this.props.username ? `Hello ${this.props.username}!` : 'Getting your profile...'}</h1>
      <ul>
        <li><Link to='/messages'>go to messages</Link></li>
      </ul>
      </div>
    )
  }
}

export default HomePage;

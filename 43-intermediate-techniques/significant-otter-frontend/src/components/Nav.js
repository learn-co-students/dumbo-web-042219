import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <nav>
        <Link to="/messages">Messages</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    );
  }

}

export default Nav;

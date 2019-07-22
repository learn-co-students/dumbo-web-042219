import React, { Component } from 'react';
import '../styles/profile_layout.css'
import Nav from '../components/Nav'

class ProfileLayout extends Component {


  render() {
    return (
      <>
        <header>
          Significant Otter
        </header>
        <Nav />
        <h1>{this.props.title}</h1>
        <main>
          {this.props.children}
        </main>
      </>
    );
  }

}

export default ProfileLayout;

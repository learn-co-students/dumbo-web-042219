import React, { Component } from 'react';
import '../styles/list_layout.css'
import Nav from '../components/Nav'
class BaseLayout extends Component {

  render() {
    return (
      <React.Fragment>
        <header>
          Significant Otter
        </header>
        <Nav />
        <h1>{this.props.title}</h1>
        <main>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }

}

export default BaseLayout;

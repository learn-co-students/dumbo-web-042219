import React, { Component } from 'react';

class UserMessage extends Component {

  render() {
    return (
      <li>
        <img src={this.props.profilePicture} width={100} alt=""/>
        <p>{this.props.text}</p>
      </li>
    );
  }

}

export default UserMessage;

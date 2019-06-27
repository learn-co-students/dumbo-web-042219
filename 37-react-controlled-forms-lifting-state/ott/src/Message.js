import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <img className="user_img" src={this.props.user.profile_picture} alt={`${this.props.user.username}`}/>
        <div>
          <h3>{this.props.user.username}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Message;

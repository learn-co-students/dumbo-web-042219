import React, { Component } from 'react';

import UserMessage from './UserMessage';

class ChannelContent extends Component {

  render() {
    const messageComponents = this.props.channel.messages.map(message => <UserMessage key={message.content.id} profilePicture={message.user.profile_picture} text={message.content.text} />)

    return (
      <div>
        <h2>{this.props.channel.name}</h2>
        <ul>
          {messageComponents}
        </ul>
      </div>
    );
  }

}

export default ChannelContent;

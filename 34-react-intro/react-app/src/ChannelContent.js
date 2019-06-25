import React, { Component } from 'react';

import UserMessage from './UserMessage';

class ChannelContent extends Component {

  render() {
    return (
      <div>
        Hello from ChannelContent!
        <UserMessage />
      </div>
    );
  }

}

export default ChannelContent;

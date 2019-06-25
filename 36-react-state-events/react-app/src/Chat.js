import React, { Component } from 'react';

import ChannelContent from './ChannelContent';
import SubmitForm from './SubmitForm';

class Chat extends Component {

  render() {
    return (
      <section>
        <ChannelContent channel={this.props.channel}/>
        <SubmitForm currentUser={this.props.currentUser}/>
      </section>
    );
  }

}

export default Chat;

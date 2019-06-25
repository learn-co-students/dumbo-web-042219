import React, { Component } from 'react';

import ChannelContent from './ChannelContent';
import SubmitForm from './SubmitForm';

class Chat extends Component {

  render() {
    return (
      <section>
        Hello from Chat!
        <ChannelContent />
        <SubmitForm />
      </section>
    );
  }

}

export default Chat;

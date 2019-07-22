import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layouts from '../layouts'
import MessageGroup from '../components/MessageGroup'
import withAuth from '../hocs/withAuth'

class MessagesPage extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/messages', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(r => r.json()).then(this.props.setInitialMessages)
  }

  renderMessageGroup = (messageGroup) => {
    return <MessageGroup
      key={messageGroup.other_otter.id}
      {...messageGroup} />
  }

  render() {
    return (
      <Layouts.List title="messages">
        {this.props.messages.map(this.renderMessageGroup)}
      </Layouts.List>
    );
  }

}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialMessages: function(messages) {
      dispatch({ type: 'SET_INITIAL_MESSAGES', messages })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(MessagesPage))

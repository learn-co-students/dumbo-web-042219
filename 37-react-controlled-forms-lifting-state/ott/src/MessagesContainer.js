import React from 'react';
import Message from './Message'

class MessagesContainer extends React.Component {
  state = {
    newMessage: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMessage(this.state.newMessage)
  }
  handleChange = (event) => {
    this.setState({ newMessage: event.target.value })
  }

  render() {
    console.log(this.state)
    const messageLis = this.props.messages.map(function(message) {
      return <Message key={message.message.id} user={message.user} text={message.message.text} />
    })

    return (
      <div className="messages_container">
        <h2 className="messages_container_header">{this.props.channelName}</h2>
        <ul className="messages_container_list">
          {messageLis}
        </ul>
        <form onSubmit={this.handleSubmit} className="messages_container_compose">
          <input
            onChange={this.handleChange}
            value={this.state.newMessage}
            type="text"
            name="new_message_text"
            placeholder={`Message ${this.props.channelName}`}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MessagesContainer;

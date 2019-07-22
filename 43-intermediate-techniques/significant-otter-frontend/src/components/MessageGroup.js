import React, { Component } from 'react';

class MessageGroup extends Component {
  state = {
    showMessages: false
  }

  renderMessage = (message) => {
    return (
      <React.Fragment key={message.id}>
        <dt>{message.from_otter.name}</dt>
        <dd>{message.text}</dd>
      </React.Fragment>
    )
  }

  showMessages = () => {
    this.setState({
      showMessages: !this.state.showMessages
    })
  }

  render() {
    return (
      <>
        <button onClick={this.showMessages}>{this.props.other_otter.name}</button>
        {this.state.showMessages ? <dl>
          {this.props.messages.map(this.renderMessage)}
        </dl> : null}
      </>
    );
  }

}

export default MessageGroup;

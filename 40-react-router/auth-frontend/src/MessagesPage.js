import React from 'react';

class MessagesPage extends React.Component {
  render() {
    console.log(this.props)
    return <h1> Hello {this.props.username} From the Messages Page!</h1>
  }
}

export default MessagesPage;

import React from 'react';
import { Link } from 'react-router-dom'

class MessagesPage extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1> {this.props.user.username ? `Hello ${this.props.user.username} from the messages page!` : 'Getting your profile...'}</h1>
      </div>
    )
  }
}

export default MessagesPage;

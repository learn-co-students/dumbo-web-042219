import React from 'react';

class ChannelsList extends React.Component {
  state = {
      channel: ''
  }

  handleOnChange = (event) => {
    this.setState({ channel: event.target.value })
  }

  handleClick = () => {
    this.props.addChannel(this.state.channel)
  }

  handleSelectChannelClick = (event) => {
    this.props.selectChannel(event.target.id)
  }

  render() {
    const channelLis = this.props.channels.map((channel) => {
      return <li key={channel.name}>
        <button id={channel.name} onClick={this.handleSelectChannelClick}>{channel.name}</button>
      </li>
    })
    console.log(this.state)

    return (
      <div className="navigation_channels_list">
        <h2>Channels</h2>
        <input
          value={this.state.channel}
          onChange={this.handleOnChange}
          type="text"
          placeholder="New channel name" />
        <button onClick={this.handleClick}>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsList;

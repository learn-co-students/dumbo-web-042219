import React from 'react';

class ChannelsDisplay extends React.Component {
  render() {
    // const channelNameLis = this.props.channelNames.map(name => <li key={name}>{name}</li>)
    const channelNameLis = this.props.channelNames.map(function(name) {
      return (
        <li key={name}>
          {name}
        </li>
      )
    })

    return (
      <div>
        <h2>Channels</h2>
        <button>+</button>
        <ul>
          {channelNameLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsDisplay;

import React, { Component } from 'react';
import Profile from './Profile';
import ChannelsList from './ChannelsList';


class Sidebar extends Component {
  render() {
    return (
      <div className="navigation_container">
        <Profile user={this.props.current_user} />
        <ChannelsList
          selectChannel={this.props.selectChannel}
          addChannel={this.props.addChannel}
          channels={this.props.channels_list} />
      </div>
    )
  }
}

export default Sidebar;

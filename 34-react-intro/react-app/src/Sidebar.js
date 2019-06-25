import React from 'react';

import Profile from './Profile'
import ChannelsDisplay from './ChannelsDisplay'

class Sidebar extends React.Component {
  // Until now, we could only write methods here for the class

  render() {
    console.log(this.props);
    return (
      <section>
        Hello from Sidebar!
        <Profile currentUser={this.props.currentUser} />
        <ChannelsDisplay channelNames={this.props.channelNames} />
      </section>
    )
  }
}

export default Sidebar

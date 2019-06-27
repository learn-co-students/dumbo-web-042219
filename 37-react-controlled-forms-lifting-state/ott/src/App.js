// ALWAYS WHEN CREATING A REACT COMPONENT
import React from 'react';
import data from './data.js';
import Sidebar from './Sidebar';
import MessagesContainer from './MessagesContainer';
import './App.css'

class App extends React.Component {

  state = {
    channels: [...data.channels],
    currentUser: {...data.current_user},
    currentChannel: {...data.channels[0]}
  }

  addChannel = (channelName) => {
    const channelObj = {
      name: `#${channelName}`,
      messages: []
    }

    this.setState({channels: [...this.state.channels, channelObj]})
  }

  selectChannel = (channelName) => {
    const selectedChannel = this.state.channels.find(channel => {
      return channel.name === channelName
    })


    // console.log(selectedChannel)
    this.setState({currentChannel: selectedChannel })
  }

  addMessage = (messageText) => {

    const messageObj = {
      user: {...this.state.currentUser},
      message: {
        text: messageText
      }
    }

    const selectedChannelCopy = {
      ...this.state.currentChannel,
      messages: [
        ...this.state.currentChannel.messages,
        messageObj
      ]
    }

    const channelsCopy = [...this.state.channels]

    const selectedChannelIndex = channelsCopy.findIndex(channel => {
      return channel.name === selectedChannelCopy.name
    })

    channelsCopy.splice(selectedChannelIndex, 1, selectedChannelCopy)


    this.setState({
      currentChannel: selectedChannelCopy,
      channels: channelsCopy
    })
  }

  render()  {
    console.log(this.state);

    return (
      <div className="grid-container">
        <Sidebar
          selectChannel={this.selectChannel}
          addChannel={this.addChannel}
          current_user={this.state.currentUser}
          channels_list={this.state.channels} />
        <MessagesContainer
          addMessage={this.addMessage}
          channelName={this.state.currentChannel.name}
          messages={this.state.currentChannel.messages}
         />
      </div>
    );
  }
}

export default App;

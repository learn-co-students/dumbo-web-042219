import React from 'react';

// new ChannelsDisplay(props)

class ChannelsDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      something: "WOW!",
      channelNames: props.channelNames
    }

  }

  // state = {
  //   something: "WOWOWOW!"
  // }

  handleClick = (e) => {

    const newChannels = [...this.state.channelNames, "#random"]
    // newChannels.push("#random")

    this.setState({
      channelNames: newChannels
    })
  }

  render() {
    // const channelNameLis = this.props.channelNames.map(name => <li key={name}>{name}</li>)
    const channelNameLis = this.state.channelNames.map(function(name) {
      return (
        <li key={name}>
          {name}
        </li>
      )
    })

    return (
      <div>
        <h2>Channels</h2>
        {/*button.addEventListener("click", fn)*/}

        {this.state.something}

        <button onClick={this.handleClick}>+</button>

        <ul>
          {channelNameLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsDisplay;

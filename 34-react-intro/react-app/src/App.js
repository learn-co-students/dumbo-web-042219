import React from 'react';

import Sidebar from './Sidebar'
import Chat from './Chat'

import ottData from './data'

function App() {
  console.log(ottData);

  const channelNames = ottData.channels.map(function(channel) {
    return channel.name
  })

  return (
    <div className="App">
      Hello from App!
      <Sidebar currentUser={ottData.current_user} channelNames={channelNames} />
      <Chat />
    </div>
  );
}

export default App;

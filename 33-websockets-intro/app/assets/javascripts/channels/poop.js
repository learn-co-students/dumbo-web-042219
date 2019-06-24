App.poop = App.cable.subscriptions.create("PoopChannel", {
  // Called when the subscription is ready for use on the server
  connected: function(){
    console.log("We connected.")
  },
  // Called when the subscription has been terminated by the server
  disconnected: function(){
    console.log("We disconnected.")
  },
  //Called when there's incoming data on the websocket for this channel
  received: function(data){
    console.log(data)
    const li = document.createElement("li")
    li.innerText = data.important
    document.querySelector(".updates").appendChild(li)
  }
});
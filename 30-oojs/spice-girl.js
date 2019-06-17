class SpiceGirl {

  constructor(name, adjective){
    this.name = name
    this.adjective = adjective
  }

  render(){
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${ this.name }</h2>
      <h3>${ this.adjective } Spice</h3>
    `
    return li; // li dom node
  }
}
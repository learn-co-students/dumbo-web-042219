class SpiceGirlList {
  constructor(spices, listElement) {
    this.list = listElement
    this.spiceGirlInstances = spices.map(function(spice) {
      return new SpiceGirl(spice.name, spice.adjective)
    });
  }

  render(){
    this.spiceGirlInstances.forEach((spiceInstance) => {
      const li = spiceInstance.render()
      this.list.append(li)
    })
  }
}



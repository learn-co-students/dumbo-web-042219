
class SpiceGirlApp {

  constructor(){
    this.ul = document.createElement("ul")
    document.body.append(this.ul)
    fetch("http://localhost:3000/spice-girls")
      .then(res => res.json())
      .then(data => this.slapSpiceGirlsOnTheDom(data))
  }

  slapSpiceGirlsOnTheDom(spices) {
    const spiceGirlList = new SpiceGirlList(spices, this.ul)
    spiceGirlList.render()
  }

}

document.addEventListener("DOMContentLoaded", function(){
  new SpiceGirlApp();
});


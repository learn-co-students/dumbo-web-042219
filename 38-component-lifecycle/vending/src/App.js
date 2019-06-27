import React from 'react';
import './App.css';
import SnackItem from './SnackItem';

class App extends React.Component {
  constructor(props) {
    super(props)

    console.log("App Component is being constructed")
    this.state = {
      counter: 0,
      snacks: []
    }
  }

  componentDidUpdate() {
    console.log("App Component has been updated")
  }

  componentDidMount() {
    console.log("App Component has been mounted")
    fetch('http://localhost:3000/snacks/')
    .then(res => res.json())
    .then((parsedJson) => {
      this.setState({snacks: parsedJson})
    })
  }

  removeSnack = (event) => {
    const newSnacks = this.state.snacks.filter(snack => {
      return snack.id !== parseInt(event.target.id)
    })
    this.setState({ snacks: newSnacks })
    // fetch(`http://localhost:3000/snacks/${event.target.id}`, {method: "DELETE"})
  }

  render() {
    console.log("App Component is being rendered")
    const { snacks } =  this.state   
    const snackLis = snacks.map(snackData => {
      return <SnackItem key={snackData.id} removeSnack={this.removeSnack} snack={snackData}/>
    })
    return (
      <div className="App">
      <ul>
        {snackLis}
      </ul>
      </div>
    );
  }
}

export default App;

import React from 'react';

class SnackItem extends React.Component {
  constructor(props) {
    super(props)
    console.log("SnackItem Component is being constructed")
    this.timer = setInterval(() => {

      console.log(`hello from ${this.props.snack.name}!!!`)

    }, 1000)
  }

  componentDidUpdate() {
    console.log("SnackItem Component has been updated")
  }

  componentDidMount() {
    console.log("SnackItem Component has been mounted")
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("SnackItem Component will be unmounted")
  }
  render() {
    console.log("SnackItem Component is being rendered")
    return (
      <li id={this.props.snack.id} onClick={this.props.removeSnack}>
        {this.props.snack.name}
      </li>
    )
  }
}

export default SnackItem;

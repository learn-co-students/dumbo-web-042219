import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    state = {
      ad: {}
    }

    componentDidMount() {
      let counter = 1;

      // set up the timer
      this.adTimerId = setInterval(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${++counter}`)
          .then(response => response.json())
          .then(json => {
            this.setState({
              ad: json
            })
          })
      }, 5000)
    }

    componentWillUnmount() {

      // stop the timer
      clearInterval(this.adTimerId)
    }

    render() {
      console.log('withAdBeginning props', this.props)
      console.log('withAdBeginning state', this.state)

      return <WrappedComponent ad={this.state.ad} {...this.props} />
    }
  }
}

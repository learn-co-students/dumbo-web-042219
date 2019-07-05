import React from 'react';
import './App.css';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import HomePage from './HomePage'
import MessagesPage from './MessagesPage'
import FourOhFourPage from './FourOhFourPage'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    username: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3001/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileInfo => this.setState({ username: profileInfo.username }))
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route
          path='/messages'
          render={routerProps => <MessagesPage {...routerProps} username={this.state.username} />} />
        <Route
          exact
          path='/'
          render={routerProps => <HomePage {...routerProps} username={this.state.username} />}
           />
        <Route component={FourOhFourPage} />
      </ Switch>
    )
  }
}

export default App;

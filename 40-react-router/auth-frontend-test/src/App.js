import React from 'react';
import './App.css';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import MessagesPage from './MessagesPage'
import HomePage from './HomePage'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    user: {}
  }

  redirect = (page) => {
     this.setState({ page: page })
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3001/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileInfo => this.setState({ user: profileInfo }))
    }
  }

  render() {
    return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/messages/:id" render={(routerProps) => <MessagesPage {...routerProps} user={this.state.user}/>} />
      <Route path="/" render={(routerProps) => <HomePage {...routerProps} user={this.state.user}/>} />
    </Switch>
  )
    // switch(this.state.page) {
    //   case 'login':
    //     return <LoginPage redirect={this.redirect} />
    //   case 'home':
    //     return <HomePage />
    // }
  }
}

export default App;

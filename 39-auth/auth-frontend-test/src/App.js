import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import IndexPage from './IndexPage';

class App extends React.Component {
  state = {
    page: 'login' // 'index', 'signup', 'login'
  }

  redirect = (page) => {
     this.setState({
       page: page
     })
   }
  render () {
    switch(this.state.page) {
      case 'index':
        return <IndexPage />
      case 'login':
        return <LoginPage redirect={this.redirect} />
      case 'signup':
        return <SignupPage redirect={this.redirect} />
    }
  }
}

export default App;

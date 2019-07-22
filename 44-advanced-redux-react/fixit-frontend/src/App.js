import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './pages'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/signup"       component={Pages.SignupPage} />
        <Route exact path="/login"        component={Pages.LoginPage} />
        <Route exact path="/problems"     component={Pages.ProblemsIndexPage} />
        <Route exact path="/problems/:id" component={Pages.ProblemShowPage} />
        <Route exact path="/profile"      component={Pages.ProfilePage} />
        <Route component={Pages.ProfilePage} />
      </Switch>
    </div>
  )
}

export default App

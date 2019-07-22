import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pages from './pages'
function App() {
  return (
    <Switch>
      <Route exact path="/signup"       component={Pages.SignupPage} />
      <Route exact path="/messages"     component={Pages.MessagesPage} />
      <Route exact path="/matches"      component={Pages.MatchesPage} />
      <Route exact path="/profile"      render={() => <Pages.ProfilePage />} />
      <Route exact path="/"             render={() => <Pages.ProfilePage />} />
      {/*<Route exact path="/login"        component={Pages.LoginPage} />*/}
      {/*<Route exact path="/recommended"  component={Pages.RecommendedPage} />*/}
      {/*<Route exact path="/matches/:id"  component={Pages.MatchesProfilePage} />*/}
      {/*<Route exact path="/liked"        component={Pages.LikedPage} />*/}
      {/*<Route exact path="/liked/:id"    component={Pages.LikedProfilePage} />*/}
    </Switch>
  );
}

export default App;

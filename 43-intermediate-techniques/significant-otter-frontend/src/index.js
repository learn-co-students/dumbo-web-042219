import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import { BrowserRouter } from 'react-router-dom';

// Uncomment the next line to see the Significant Otter sample app
import App from './App';

// Uncomment the next line to see the example of the wrapper component
// import App from './wrappedConcept/App';

// Uncomment the next line to see the example of the with... concept
// without the dummy wrapper applied
// import App from './withConcept/AppWithoutWrapper'

// Uncomment the next line to see the example of the with... concept
// with the dummy wrapper applied
// import App from './withConcept/AppWithWrapper'

// Uncomment the next line to see the example of the withAd concept
// import App from './withAdConcept/App'

// Uncomment the next line to see the example of withAuth
// MAKE SURE YOU HAVE THE SIGNIFICANT OTTER BACKEND RUNNING!
// import App from './withAuthConcept/App'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

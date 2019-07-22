import React, { Component } from 'react';
import ArticleWithAd from './ArticleWithAd';

class App extends Component {

  render() {
    return (
      <ArticleWithAd>
        {/*
           notice here we're wrapping the `h1` and
           `p` tags with our wrapper component 
        */}

        <h1>This is my article title!</h1>
        <p>This is my article body lorem ipsum</p>
        <p>Lorem ipsum some more...</p>
      </ArticleWithAd>
    );
  }

}

export default App;

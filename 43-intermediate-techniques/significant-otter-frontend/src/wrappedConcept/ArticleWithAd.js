import React, { Component } from 'react';

class ArticleWithAd extends Component {
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

  // Notice the `this.props.children`!
  render() {
    const hasAnAdBeenLoaded = !!Object.keys(this.state.ad).length
    return (
      <article>
        {/* display the wrapped component */}
        {this.props.children}

        {hasAnAdBeenLoaded && (
          <aside className="inline-ad">
            <img alt="another annoying ad" src={this.state.ad.thumbnailUrl} />
          </aside>
        )}
      </article>
    )
  }
}

export default ArticleWithAd;

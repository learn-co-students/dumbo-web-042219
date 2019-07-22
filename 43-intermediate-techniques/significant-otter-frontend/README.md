# HOCs and Thunk

> **NOTE:** If you're going to walk through this and expect the code to run, you will need to start up the back-end, get a token from the sign up or login route, and put that token in your localStorage.
>
> `rails db:create && rails db:migrate && rails db:seed && rails s`
>
> Make sure to start your React server AFTER you've started up your rails server

## HOCs (Higher-order components)

Plain definition: components or functions that wrap components

### Wrapper Component concept

These components are external components that we wrap around some child components. Examples of these components are `BrowserRouter`, `Provider`, Semantic UI's `Form`, etc.

When I've created these components myself, I've usually used these types of HOC's for things like pages and layouts.

A simple example looks like below. We'll create a wrapper component to display a new ad every 5 seconds in the body of an article:

```js
// wrappedConcept/ArticleWithAd.js
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
```

Once we create this wrapper component, we can use it **around** any component that we want to add ads to! The drawbacks to this approach are that we can't pass any information to the children; we can only render them! Also since we're just rendering and not sending any data down, it means that the layout for the wrapped components will always depend on the layout of the wrapper!

Let's see an example of a wrapped component!

```js
// wrappedConcept/App.js
import React, { Component } from 'react';
import ArticleWithAd from './ArticleWithAd';

class App extends Component {

  render() {
    return (
      <ArticleWithAd>
        <h1>This is my article title!</h1>
        <p>This is my article body lorem ipsum</p>
        <p>Lorem ipsum some more...</p>
      </ArticleWithAd>
    );
  }

}

export default App;
```

### `with...` Concept

When people mention higher-order components, they're usually talking about this concept, though. This is the more powerful one since what it allows us to do is to reduce data and duplication across components. This one also tends to make more sense once you work through the layers.


#### An empty HOC

Let's start with a function and a class:

```js
// withConcept/functionAndClass.js
import React, { Component } from 'react';

function myCoolFunction() {}

class MyComponent extends Component {
  render() {
    console.log('cool component props', this.props);
    console.log('cool component state', this.state);

    return "hola!"
  }
}
```

We are familiar with writing functions and also create class-based React components. The next step is to put the class inside of the function and return it!

```js
// withConcept/functionAndClassTogether4Ever.js
import React, { Component } from 'react';

function myCoolFunction() {

  // see how we're just returning the component?!
  return class MyComponent extends Component {
    render() {
      console.log('cool component props', this.props);
      console.log('cool component state', this.state);

      return "hola!"
    }
  }
}
```

At this point, we can already use this component! In order to get the component definition, we just call the `myCoolFunction` function. We should export it so we can use it in other files:

```js
// withConcept/functionAndClassTogether4EverExported.js
import React, { Component } from 'react';

export default function myCoolFunction() {

  // see how we're just returning the component?!
  return class MyComponent extends Component {
    render() {
      console.log('cool component props', this.props);
      console.log('cool component state', this.state);

      return "hola!"
    }
  }
}
```

Don't forget that we're trying to wrap a component with some logic/state/data whatever functionality we want. This means that we're going to need to get the component that we're going to wrap! This is where function arguments come in handy. Let's create a new component and add it to the DOM so we can see it.

```js
// withConcept/AppWithoutWrapper.js
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>Hi from App!</div>
    );
  }

}

export default App;
```

Head over to the `index.js` file and uncomment the appropriate line to see this in action.

The next step is to import our wrapper function and to call it with our App as an argument.

```js
// withConcept/AppWithWrapper.js
import React, { Component } from 'react';
import withConcept from './functionAndClassTogether4EverExported';

class App extends Component {

  render() {
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withConcept(App);
```

You should see that the `AppWithoutWrapper` just renders "Hi from App!" while the `AppWithWrapper` renders "hola". This is because the `withConcept` function (and all higher-order functions of this type) are creating NEW components that have their OWN render functions!

#### Building `withAd`

Let's go back to our ad example. Let's say that we want different components to display ads. Maybe an article, maybe a sidebar, maybe a footer. We won't be picky, we just want to tell our application how to get the ad information, not how to render it.

We'll create a new higher-order component called `withAd` and a new `App` component which is wrapped `withAd`.

```js
// withAdConcept/withAdBeginning.js
import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    render() {
      console.log('withAdBeginning props', this.props)
      console.log('withAdBeginning state', this.state)

      return <WrappedComponent />
    }
  }
}
```

```js
// withAdConcept/App.js
import React, { Component } from 'react';
import withAd from './withAdBeginning';

class App extends Component {

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withAd(App);
```

Right now, the higher-order component is working with the wrapped component and simply rendering the wrapped component exactly as it is. If we open this in the browser, we see neither the `withAd` component and the `App` component have any props or state! This is good to start with.

We know how to fetch ads already, so we're going to create some state in the component inside of `withAd`, make the fetch every few seconds, and pass that information as props to the `App` component.

```js
// src/withAdConcept/withAdSoFetch.js
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
```

The ONLY thing we changed about the `withAd` component is that we added initial state, added a fetch every five seconds, and passed that state down to the wrapped component as props. I'll also update my `App` component slightly to use the new version of `withAd`.

```js
// withAdConcept/App.js

import React, { Component } from 'react';
// import withAd from './withAdBeginning';
import withAd from './withAdSoFetch';

class App extends Component {

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withAd(App);
```

In the browser console, we should see the App component rerendering based on the new props it's receiving from the `withAd` higher-order component every five seconds. This is a useful HOC! Now my `App` component (or ANY component) can be wrapped with that functionality in order to receive new ads every five seconds.

The only small piece that's missing is that when we create higher-order components, we may be COMPOSING multiple higher-order components together (think something like `withRouter(withAd(connect(mstp, mdtp)(MyComponent)))`). In order to get around this we want to make sure to pass all other received props down to the wrapped component. This has already been done in the example above with the `{...this.props}` bit of code.

### `withAuth`: A more powerful HOC for your projects

Many student projects include components or pages that need to be hidden to people that are not signed in to their application. If you've followed the guide in Mod 4 on how to set up JWT auth, then this is the section for you. `withAuth` is going to provide us the functionality to check whether a user is logged in before rendering a component. If they aren't logged in, then we can redirect them to our `/login` frontend route!

#### Guides for `withAuth`

There are six use-cases documented in this repo to build a `withAuth` hoc. DO NOT COPY THESE DIRECTLY, BUT USE THEM TO GUIDE WHAT YOU BUILD. YOU MAY NOT NEED EVERYTHING THIS GIVES:

All of these guides work with the [`App`](/src/withAuthConcept/App.js) component listed in the `withAuthConcept` folder and the [`index.js`](/src/index.js) file in the `src` folder.

* If you're using auth, but **not router** and **not redux**
  * [`withAuth`](/src/withAuthConcept/withAuthWithoutRouterNorRedux.js)
* If you're using auth and redux, but **not router**
  * [`withAuth`](/src/withAuthConcept/withAuthWithoutRouterWithRedux.js)
  * [`authReducer`](/src/withAuthConcept/authReducer.js)
  * [`rootReducer`](/src/reducers/rootReducer.js)
    * Look at the parts that say "auth"!
* If you're using auth, redux, and thunk, but **not router**
  * [`withAuth`](/src/withAuthConcept/withAuthWithoutRouterWithReduxWithThunk.js)
  * [`authActions`](/src/withAuthConcept/authActions.js)
  * [`authReducer`](/src/withAuthConcept/authReducer.js)
  * [`rootReducer`](/src/reducers/rootReducer.js)
    * Look at the parts that say "auth"!
* If you're using auth and router, but **not redux**
  * [`withAuth`](/src/withAuthConcept/withAuthWithRouterNoRedux.js)
* If you're using auth and router and redux
  * [`withAuth`](/src/withAuthConcept/withAuthWithRouterWithRedux.js)
  * [`authReducer`](/src/withAuthConcept/authReducer.js)
  * [`rootReducer`](/src/reducers/rootReducer.js)
    * Look at the parts that say "auth"!
* If you're using auth and router and redux and thunk
  * [`withAuth`](/src/withAuthConcept/withAuthWithRouterWithReduxWithThunk.js)
  * [`authActions`](/src/withAuthConcept/authActions.js)
  * [`authReducer`](/src/withAuthConcept/authReducer.js)
  * [`rootReducer`](/src/reducers/rootReducer.js)
    * Look at the parts that say "auth"!

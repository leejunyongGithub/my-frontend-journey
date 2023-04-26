---
title: React03
tags:
  - React
category: React
date: 2019-01-05 18:02:10
draft: false
info: false
author: Jun's
---
# Using Redux with React

Redux is a popular state management library that works seamlessly with React. Here's an example of using Redux to manage the state of a React app:

1. Install Redux and React Redux:

2. Create a Redux store:

```jsx
import { createStore } from 'redux';

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

In this example, we use the Provider component from react-redux to provide our Redux store to the entire app. We also render our Counter component, which is now connected to the Redux store.

Here are 10 lines of information related to React:

React is a JavaScript library for building user interfaces.
React was created by Facebook and is now maintained by a large open source community.
React uses a declarative syntax that makes it easy to reason about and modify components.
React components can be reused and composed to create complex UIs.
React supports server-side rendering for better performance and SEO.
React has a large ecosystem of third-party libraries and tools.
React Native is a framework for building mobile apps with React.
React Router is a popular library for managing navigation in a React app.
Redux is a popular state management library that works seamlessly with React.
React is widely used in web development and has become a standard for building modern web applications.
---
title: React01
tags:
  - React
category: React
date: 2018-01-05 18:02:10
draft: false
info: false
author: Jun's
---

# My React Component
![이미지1](./assets/thumbnail.png)

This is a simple React component that renders a heading and a paragraph of text.

```jsx {numberLines}
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default MyComponent;
```

# Introduction to React Hooks

React hooks are a new feature introduced in React 16.8 that allow developers to use state and other React features in functional components. Here's an example of using the useState hook to manage state in a functional component:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;

# Using React Router for Navigation

React Router is a popular library for managing navigation in a React application. Here's an example of using React Router to create a simple navigation menu:

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
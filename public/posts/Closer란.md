---
title: Closer란
tags:
  - javascript
category: javascript
date: 2019-01-05 18:02:10
draft: false
info: false
---
Understanding JavaScript Closures
In JavaScript, a closure is created whenever a function is defined inside another function. The inner function has access to the outer function's variables and parameters, even after the outer function has returned. This makes closures a powerful tool for creating modular and flexible code.

Here's an example of a closure in action:

function outerFunction() {
  var outerVariable = "I am outer.";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var innerFunctionRef = outerFunction();
innerFunctionRef(); // Output: "I am outer."

In this example, innerFunction is defined inside outerFunction. When outerFunction is called, it returns a reference to innerFunction. This reference is stored in innerFunctionRef. When innerFunctionRef is called, it logs the value of outerVariable to the console. This is possible because innerFunction has access to outerVariable, even though outerFunction has already returned.

Here are some key points to keep in mind when working with closures:

Closures have access to the outer function's variables and parameters: This is possible because the outer function's variables and parameters are stored in the closure's scope chain.

Closures can access the outer function's variables even after the outer function has returned: This is possible because the closure maintains a reference to the outer function's variables.

Closures can be used to create private variables and functions: By defining variables and functions inside a closure, you can prevent them from being accessed outside the closure.

Here's an example of using a closure to create a private variable:

function counter() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

var counter1 = counter();
counter1(); // Output: 1
counter1(); // Output: 2

var counter2 = counter();
counter2(); // Output: 1

In this example, counter returns a function that has access to the count variable. Each time the returned function is called, the count variable is incremented and logged to the console.

By returning a reference to the increment function, we can create multiple counters that operate independently. Each counter has its own private count variable.

You can find more examples and details about closures in JavaScript on GitHub or other online resources.
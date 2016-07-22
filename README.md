# Deprecated

**WARNING:** As noted in https://github.com/okgrow/meteor-promise/issues/6 - okgrow:promise is deprecated in favor of the deanius:meteor-promise package at https://github.com/deanius/meteor-promise

# Demo
The demo-enabled README is at http://okgrow-promise.meteor.com/

# API

The *okgrow:promise* package gives you the following functionality:

  - `Meteor.promise` - The same as `Meteor.call`, but you omit the callback parameter, and it returns a `Promise` for the result
  - `Meteor.wrapPromise` - Takes *any* callback-style function, and returns a Promise-returning function.
    This is like `Meteor.wrapAsync`, but useful on the client.
  - `HTTP.getPromise` - All methods on the HTTP object will have Promise-returning versions, just append `Promise` onto the method name.
  - `Meteor.subscribe` - The object returned by `Meteor.subscribe` will have a `readyPromise` property which resolves when `ready()` returns `true`.
  - `ReactivePromise` - A function to wrap Promise-returning functions with, to create reactive functions - such as helpers - which update when their promised value becomes available.

  
Thoughts? Questions? Open an issue in [`okgrow:promise`](https://github.com/okgrow/meteor-promise), and let's discuss. Or find me on social media. Thanks for your interest!

Package.describe({
  name: 'okgrow:promise',
  version: '0.9.1',
  summary: 'Get a Promise for a Meteor method call. Create async reactive functions using Promises.',
  git: 'https://github.com/okgrow/meteor-promise',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('ddp', 'client', 'promise', 'ecmascript');
  api.addFiles('promise.js', ['client', 'server']);
  api.addFiles('reactivePromise.js', 'client');
  api.export("ReactivePromise", 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('okgrow:promise');
  api.use('reactive-var');
  api.use('ecmascript');
  api.addFiles('tests/support.js', ['client', 'server']);
  api.addFiles('tests/identity-tests.js', ['client', 'server']);
  api.addFiles('tests/chaining-tests.js', ['client', 'server']);
  api.addFiles('tests/error-tests.js', ['client', 'server']);
  api.addFiles('tests/call-wo-callback.js', ['client']);
  api.addFiles('tests/reactive-promise.js', ['client']);
});

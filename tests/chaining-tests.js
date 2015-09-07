// This test not reliably passing on the server

if (Meteor.isClient) {
  Tinytest.addAsync('Meteor.promise - chaining - 3', (test, done) => {
    var p = Meteor.promise("identity", 1);

    var testFunc = wrapOnServer((actual) => {
      test.equal(actual, 1+1+1);
      done();
    });

    p.then(increment)
     .then(increment)
     .then(testFunc);
  });

  Tinytest.addAsync('Meteor.promise - chaining - README Examples - success', (test, done) => {
    Meteor.promise("createCustomer", "foo@bar.com", "VISA")
      .then(customer => Meteor.promise("createCustomerSubscription", customer.id, "foo"))
      .then(plan => console.log("Plan", plan))
      .then(() => {
        test.equal(true, true);
        done();
      })
      .catch( (err) => {
        test.equal(true, false);
        console.error(err);
        done();
      });
  });
  Tinytest.addAsync('Meteor.promise - chaining - README Examples - fail', (test, done) => {
    Meteor.promise("createCustomer") // will throw due to no args
      .then(customer => Meteor.promise("createCustomerSubscription", customer.id, "foo"))
      .then(plan => console.log("Plan", plan))
      .then(() => {
        test.equal(true, false);
        done();
      })
      .catch((err) => {
        test.equal(true, true);
        console.error(err);
        done();
      })

  });
}

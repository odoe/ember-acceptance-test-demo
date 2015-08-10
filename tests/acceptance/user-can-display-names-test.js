import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'acceptance-demo/tests/helpers/start-app';

var application;

module('Acceptance | user can display names', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visited', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('click and display names', function(assert) {
  var done = assert.async();
  visit('/');

  setTimeout(function() {
    click('a[href=#]');
    andThen(function() {
      assert.equal(Ember.$('.name-container').children().length, 4);
      console.log('test done');
      done();
    });
  }, 1000);

});

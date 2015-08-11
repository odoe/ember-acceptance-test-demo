import Ember from 'ember';
import { module, test } from 'qunit';
import {waitFor} from "../helpers/utilities";
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
  visit('/');
  click('a[href=#]');
  andThen(function() {
    waitFor(function() {
      assert.equal(find('.name-container').children().length, 4);
    });
  });
});

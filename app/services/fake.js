import Ember from 'ember';

export default Ember.Service.extend({
  update: null,
  names: null,
  queryNames: Ember.observer('upper', function() {
    setTimeout(() => {
      this.set('names', ['tim', 'tom', 'bob', 'bill']);
    }, 500);
  })
});

import Ember from 'ember';

export default Ember.Service.extend({
  update: null,
  names: null,
  queryNames: Ember.observer('upper', function() {
    console.log('fake service, set names');
    setTimeout(() => {
      this.set('names', ['tim', 'tom', 'bob', 'bill']);
    }, 500);
  })
});

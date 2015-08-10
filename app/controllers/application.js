import Ember from 'ember';

export default Ember.Controller.extend({
  fakeService: Ember.inject.service('fake'),
  update: null,
  names: Ember.computed('fakeService.names.@each', 'update', function() {
    var names = this.get('fakeService.names');

    console.log('computed', names);

    if (!names || !this.update) {
      return null;
    }

    return names.map(name => name.toUpperCase() + ' - ' + this.update);

  }),

  actions: {
    upperNames: function(update) {
      console.log('update?', update);
      // I'd normall update this service via a different component
      // but do it here to simplify sample
      this.get('fakeService').set('upper', update);
      this.set('update', update);
    }
  }
});

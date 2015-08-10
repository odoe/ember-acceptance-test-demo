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
      this.set('update', update);
      this.get('fakeService').set('upper', update);
    }
  }
});
